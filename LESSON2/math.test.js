const math = require("./math");
const { add, minus, multi } = math;

test("测试3+3", () => {
  expect(add(3, 3)).toBe(6);
});
test("测试3-3", () => {
  expect(minus(3, 3)).toBe(0);
});
test("测试3*3", () => {
  expect(multi(3, 3)).toBe(9);
});
