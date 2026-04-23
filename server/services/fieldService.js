export const determineResponse = (field, progress) => {
  if (!field) {
    return {
      error: { status: 404, msg: "Field not found." },
    };
  }
  if (field.images.length === 0) {
    return {
      error: { status: 404, msg: "NO images in this field." },
    };
  }

  if (!progress) {
    return {
      status: 200,
      action: "CREATE_PROGRESS",
      image: field.images[0],
    };
  }

  if (progress.completed) {
    return {
      error: { status: 200, msg: "Field already Completed." },
    };
  }

  return {
    action: "RETURN_CURRENT",
    imageId: progress.currentImageId,
  };
};

export const determineNextImageFlow = (progress, nextImage) => {
  if (!progress) {
    return {
      error: { status: 400, msg: "Start the field first." },
    };
  }
  if (progress.completed) {
    return {
      error: { status: 200, msg: "Field already Completed." },
    };
  }
  if (!nextImage) {
    return {
      action: "COMPLETE_FIELD",
    };
  }
  return {
    action: "MOVE_NEXT",
    nextImageId: nextImage.id,
  };
};

export const calculateTimeTaken = (startedAt, completedAt) => {
  return completedAt.getTime() - startedAt.getTime();
};

export const determinePlayerResult = (
  field,
  character,
  xPosition,
  yPosition,
) => {
  if (!field) {
    return {
      error: { status: 404, msg: "Field not found." },
    };
  }
  if (!character) {
    return {
      error: { status: 404, msg: "Character not found." },
    };
  }

  const correct =
    xPosition >= character.xMin &&
    xPosition <= character.xMax &&
    yPosition >= character.yMin &&
    yPosition <= character.yMax;

  return {
    correct,
    character,
  };
};
