import { getDefaultTextColor } from "../index";

describe("getDefaultTextColor", () => {
  test("should return white text when dark mode is ENABLED", () => {
    const result = getDefaultTextColor(true);
    const expectedResult = "white";
    expect(result).toEqual(expectedResult);
  });
  test("should return black text when dark mode is DISABLED", () => {
    const result = getDefaultTextColor(false);
    const expectedResult = "black";
    expect(result).toEqual(expectedResult);
  });
});
