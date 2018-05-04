const cssJoin = require("../");

test("joins 2 class names", () => {
    expect(cssJoin("class1", "class2")).toBe("class1 class2");
});

test("joins many class names", () => {
    expect(cssJoin("class1", "class2", "class3", "class4")).toBe("class1 class2 class3 class4");
});

test("no classes returns empty string", () => {
    expect(cssJoin()).toBe("");
});

test("undefined returns empty string", () => {
    var cssClass;
    expect(cssJoin(cssClass)).toBe("");
});
