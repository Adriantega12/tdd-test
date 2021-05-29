import { add } from "./calculator";

test("Testing 1 + 2", () => {
    expect(add(1, 2)).toBe(3);
});