import { prisma } from "../lib/prisma.js";
import {
  getPagination,
  getSortOrder,
  getPaginationMeta,
} from "../services/pagination.js";
import {
  determineResponse,
  determineNextImageFlow,
  calculateTimeTaken,
  determinePlayerResult,
  formatImageResponse,
} from "../services/fieldService.js";

export const getFields = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const { limitNumber, skip } = getPagination(page, limit);
    const order = getSortOrder(sort);

    const fields = await prisma.field.findMany({
      skip: skip,
      take: limitNumber,
      orderBy: {
        timeTaken: order,
      },
      select: {
        id: true,
        name: true,
        thumbnailUrl: true,
        description: true,
      },
    });
    return res.status(200).json(fields);
  } catch (err) {
    console.error("Fired 500 error:", err);
    next(err);
  }
};

export const getFirstFieldImage = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { fieldId } = req.params;
    const field = await prisma.field.findUnique({
      where: { id: fieldId },
      include: {
        images: {
          orderBy: {
            createdAt: "asc",
          },
          include: {
            characters: true,
          },
        },
      },
    });

    const progress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: {
          userId,
          fieldId,
        },
      },
    });

    const descision = determineResponse(field, progress);

    if (descision.error) {
      return res
        .status(descision.error.status)
        .json({ msg: descision.error.msg });
    }

    if (descision.action === "CREATE_PROGRESS") {
      const newProgress = await prisma.userFieldProgress.create({
        data: {
          userId,
          fieldId,
          currentImageId: descision.image.id,
        },
      });
      return res
        .status(descision.status)
        .json(formatImageResponse(descision.image, newProgress));
    }

    if (descision.action === "RETURN_CURRENT") {
      const currentImage = await prisma.image.findUnique({
        where: {
          id: descision.imageId,
        },
        include: {
          characters: true,
        },
      });

      return res.status(200).json(formatImageResponse(currentImage, progress));
    }
  } catch (err) {
    next(err);
  }
};

export const getNextImage = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { fieldId } = req.params;

    const progress = await prisma.userFieldProgress.findUnique({
      where: {
        userId_fieldId: { userId, fieldId },
      },
    });

    const currentImage = progress
      ? await prisma.image.findUnique({
          where: { id: progress.currentImageId },
          include: {
            characters: true,
          },
        })
      : null;

    if (!progress || !currentImage) {
      return res.status(400).json({
        msg: "No active game progress",
      });
    }

    const imageCharactersIds = currentImage.characters.map((char) => char.id);

    const allFound = imageCharactersIds.every((id) => {
      return progress.foundCharacters.includes(id);
    });

    if (!allFound) {
      return res.status(400).json({
        msg: "Incomplete",
        remaining: imageCharactersIds.filter(
          (id) => !progress.foundCharacters.includes(id),
        ),
      });
    }

    const nextImage = await prisma.image.findFirst({
      where: {
        fieldId,
        order: { gt: currentImage.order },
      },
      orderBy: { order: "asc" },
      include: {
        characters: true,
      },
    });

    const decision = determineNextImageFlow(progress, nextImage);

    if (decision.error) {
      return res
        .status(decision.error.status)
        .json({ msg: decision.error.msg });
    }

    if (decision.action === "COMPLETE_FIELD") {
      const completedAt = new Date();

      await prisma.userFieldProgress.update({
        where: {
          userId_fieldId: { userId, fieldId },
        },
        data: {
          completed: true,
          completedAt,
          currentImageId: null,
        },
      });

      const timeTaken = calculateTimeTaken(progress.startedAt, completedAt);

      await prisma.leaderBoard.create({
        data: { userId, fieldId, timeTaken },
      });

      return res.status(200).json({
        msg: "Field Completed!",
        timeTaken,
      });
    }

    await prisma.userFieldProgress.update({
      where: {
        userId_fieldId: { userId, fieldId },
      },
      data: {
        currentImageId: decision.nextImageId,
      },
    });

    progress.currentImageId = decision.nextImageId;

    return res.status(200).json(formatImageResponse(nextImage, progress));
  } catch (err) {
    next(err);
  }
};

export const getLeaders = async (req, res, next) => {
  try {
    const { fieldId } = req.params;
    const { page, limit, sort } = req.query;

    const { pageNumber, limitNumber, skip } = getPagination(page, limit);
    const order = getSortOrder(sort);

    const field = await prisma.field.findUnique({
      where: { id: fieldId },
    });

    if (!field) {
      return res.status(404).json({ msg: "Field not found." });
    }

    const [leaders, total] = await Promise.all([
      prisma.leaderBoard.findMany({
        where: { fieldId },
        skip: skip,
        take: limitNumber,
        orderBy: {
          timeTaken: order,
        },
        include: {
          user: {
            select: { username: true },
          },
        },
      }),
      prisma.leaderBoard.count({
        where: { fieldId },
      }),
    ]);

    const totalPages = getPaginationMeta(total, limit);

    res.status(200).json({
      leaders,
      page: pageNumber,
      totalPages,
    });
  } catch (err) {
    next(err);
  }
};

export const checkPlay = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { fieldId } = req.params;

    const field = await prisma.field.findUnique({
      where: { id: fieldId },
    });

    const { xPosition, yPosition, characterName } = req.body;

    const character = await prisma.character.findFirst({
      where: {
        name: characterName,
        fieldId,
      },
    });

    const gameLogic = determinePlayerResult(
      field,
      character,
      xPosition,
      yPosition,
    );

    if (gameLogic.error) {
      return res
        .status(gameLogic.error.status)
        .json({ msg: gameLogic.error.msg });
    }

    if (!gameLogic.correct) {
      return res.status(200).json({
        correct: false,
        msg: "Incorrect",
      });
    }

    await prisma.userFieldProgress.update({
      where: {
        userId_fieldId: {
          userId,
          fieldId,
        },
      },
      data: {
        foundCharacters: {
          push: character.id,
        },
      },
    });

    return res.status(200).json({
      correct: true,
      msg: "Correct",
      character: {
        id: character.id,
        name: character.name,
      },
    });
  } catch (err) {
    next(err);
  }
};
