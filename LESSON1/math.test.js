/* var result = add(3, 7);
var expected = 10;

if (result !== expected) {
  throw Error(`3 + 7 应该等于${expected},但是结果却是${result}`);
}

var result = minus(6, 2);
var expected = 4;

if (result !== expected) {
  throw Error(`6 - 2 应该等于${expected},但是结果却是${result}`);
}

var result = multi(3, 7);
var expected = 21;

if (result !== expected) {
  throw Error(`3 * 7 应该等于${expected},但是结果却是${result}`);
} */

function expect(result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error("预期值和实际值不相等,预期${actual},结果却是${result}");
      }
    },
  };
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}通过测试`);
  } catch (e) {
    console.error(`${desc}没有通过测试${e}`);
  }
}

test("测试3+3", () => {
  expect(add(3, 3)).toBe(6);
});
test("测试3-3", () => {
  expect(add(3, 3)).toBe(6);
});
test("测试3*3", () => {
  expect(add(3, 3)).toBe(9);
});
