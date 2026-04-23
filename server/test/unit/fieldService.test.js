import {
  determineResponse,
  determineNextImageFlow,
  determinePlayerResult,
  calculateTimeTaken,
} from "../../services/fieldService";
import {
  createUnitTestingField,
  createUnitTestingProgress,
} from "../helpers/fieldHelper";

describe("fieldService", () => {
  test("calculateTimeTaken - returns time taken correctly", () => {
    const startedAt = new Date(0);
    const completedAt = new Date(5000);

    const result = calculateTimeTaken(startedAt, completedAt);

    expect(result).toBe(5000);
  });
  test("determineResponse - returns 404 if no field", () => {
    const field = undefined;
    const progress = undefined;
    const result = determineResponse(field, progress);
    expect(result.error.status).toBe(404);
    expect(result.error.msg).toBe("Field not found.");
  });
  test("determineResponse - returns 404 if field has no images", () => {
    const field = createUnitTestingField({ images: [] });
    const progress = undefined;

    const result = determineResponse(field, progress);
    expect(result.error.status).toBe(404);
    expect(result.error.msg).toBe("NO images in this field.");
  });
  test("determineResponse - if no progress creates one", () => {
    const field = createUnitTestingField();
    const progress = undefined;
    const result = determineResponse(field, progress);

    expect(result.status).toBe(200);
    expect(result.action).toBe("CREATE_PROGRESS");
    expect(result.image).toBe(field.images[0]);
  });
  test("determineResponse - if progress is complete throws error message", () => {
    const progress = createUnitTestingProgress({ completed: true });
    const field = createUnitTestingField();
    const result = determineResponse(field, progress);

    expect(result.error.status).toBe(200);
    expect(result.error.msg).toBe("Field already Completed.");
  });
  test("determineResponse - returns current progress", () => {
    const progress = createUnitTestingProgress();
    const field = createUnitTestingField();
    const result = determineResponse(field, progress);

    expect(result.action).toBe("RETURN_CURRENT");
    expect(result.imageId).toBe(progress.currentImageId);
  });
  test("determineNextImageFlow - no progress returns 400", () => {
    const result = determineNextImageFlow(undefined, undefined);
    expect(result.error.status).toBe(400);
    expect(result.error.msg).toBe("Start the field first.");
  });
  test("determineNextImageFlow - progress completed", () => {
    const progress = createUnitTestingProgress({ completed: true });
    const result = determineNextImageFlow(progress, undefined);

    expect(result.error.status).toBe(200);
    expect(result.error.msg).toBe("Field already Completed.");
  });
  test("determineNextImageFlow - no nextImage", () => {
    const progress = createUnitTestingProgress();
    const result = determineNextImageFlow(progress, undefined);

    expect(result.action).toBe("COMPLETE_FIELD");
  });
  test("determineNextImageFlow - move next", () => {
    const progress = createUnitTestingProgress();
    const nextImage = {
      id: "id",
    };
    const result = determineNextImageFlow(progress, nextImage);

    expect(result.action).toBe("MOVE_NEXT");
    expect(result.nextImageId).toBe(nextImage.id);
  });
  test("determinePlayerResult - no field", () => {
    const result = determinePlayerResult(
      undefined,
      undefined,
      undefined,
      undefined,
    );

    expect(result.error.status).toBe(404);
    expect(result.error.msg).toBe("Field not found.");
  });
  test("determinePlayerResult - no character", () => {
    const field = createUnitTestingField({ images: [] });
    const result = determinePlayerResult(
      field,
      undefined,
      undefined,
      undefined,
    );

    expect(result.error.status).toBe(404);
    expect(result.error.msg).toBe("Character not found.");
  });
  test("determinePlayerResult  - correct coordinates", () => {
    const field = createUnitTestingField({ images: [] });
    const character = {
      xMin: 0,
      xMax: 10,
      yMin: 0,
      yMax: 10,
    };
    const result = determinePlayerResult(field, character, 5, 5);

    expect(result.correct).toBe(true);
  });
  test("determinePlayerResult - wrong position", () => {
    const field = createUnitTestingField({ images: [] });
    const character = {
      xMin: 0,
      xMax: 10,
      yMin: 0,
      yMax: 10,
    };
    const result = determinePlayerResult(field, character, 20, 20);

    expect(result.correct).toBe(false);
  });
});
