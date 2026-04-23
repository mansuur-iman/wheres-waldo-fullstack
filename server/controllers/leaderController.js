import { prisma } from "../lib/prisma.js";
import { prisma } from "../lib/prisma.js";

export const getLeaders = async (req, res, next) => {
  try {
    const { fieldId } = req.params;
    const { page, limit, sort } = req.query;

    const pageNumber = Number(page) || 1;
    const limitNumber = Math.min(Number(limit) || 10, 50);

    const field = await prisma.field.findUnique({
      where: { id: fieldId },
    });

    if (!field) {
      return res.status(404).json({ msg: "Field not found." });
    }

    const [leaders, total] = await Promise.all([
      prisma.leaderBoard.findMany({
        where: { fieldId },
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
        orderBy: {
          timeTaken: sort === "desc" ? "desc" : "asc",
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

    res.status(200).json({
      leaders,
      page: pageNumber,
      totalPages: Math.ceil(total / limitNumber),
    });
  } catch (err) {
    next(err);
  }
};
