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
    let cssClass;

    expect(cssJoin(cssClass)).toBe("");
});

test("if test is true, returns className", () => {
    expect(cssJoin([true, "class1"])).toBe("class1");
});

test("if test is true, returns first className", () => {
    expect(cssJoin([true, "class1", "class2"])).toBe("class1");
});

test("if test is false, returns empty string", () => {
    expect(cssJoin([false, "class1"])).toBe("");
});

test("if test is false, returns second className", () => {
    expect(cssJoin([false, "class1", "class2"])).toBe("class2");
});

test("if test param is false, returns first className", () => {
    let test;

    expect(cssJoin([!test, "class1"])).toBe("class1");
});
