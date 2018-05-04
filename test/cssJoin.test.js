const cssJoin = require("../");

test("joins 2 string classNames", () => {
    expect(cssJoin("class1", "class2")).toBe("class1 class2");
});
