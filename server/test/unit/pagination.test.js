import {
  getPagination,
  getSortOrder,
  getPaginationMeta,
} from "../../services/pagination";

describe("pagination", () => {
  test("getPagination - returns default value when empty", () => {
    const result = getPagination();

    expect(result.pageNumber).toBe(1);
    expect(result.limitNumber).toBe(10);
    expect(result.skip).toBe(0);
  });

  test("getPagination - calculates skip correctly", () => {
    const result = getPagination(2, 10);

    expect(result.skip).toBe(10);
  });

  test("getPagination - cats limit at 50", () => {
    const result = getPagination(1, 100);

    expect(result.limitNumber).toBe(50);
  });

  test("getSortOrder -returns asc when input is asc", () => {
    const result = getSortOrder("asc");

    expect(result).toBe("asc");
  });

  test("getSortOrder - returns desc when input is desc", () => {
    const result = getSortOrder("desc");

    expect(result).toBe("desc");
  });

  test("getSorder - defaults to desc", () => {
    expect(getSortOrder("something")).toBe("desc");
    expect(getSortOrder()).toBe("desc");
    expect(getSortOrder(null)).toBe("desc");
  });

  test("getPaginationMeta - calculates totalpages correctly", () => {
    expect(getPaginationMeta(100, 10)).toBe(10);
  });

  test("rounds up when not evenly divisible", () => {
    expect(getPaginationMeta(101, 10)).toBe(11);
  });

  test("returns 1 when total is less than limit", () => {
    expect(getPaginationMeta(5, 10)).toBe(1);
  });

  test("handles edge case limit = 1", () => {
    expect(getPaginationMeta(7, 1)).toBe(7);
  });
});
