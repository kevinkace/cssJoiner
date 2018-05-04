// join("button", "buttonPrimary");
// -> "button buttonPrimary"

// join(css.btn, css.btnPrimary);
// -> "button buttonPrimary"

// join(css.btn, [isPrimary, css.btnPrimary])
// -> "button buttonPrimary",
// -> "button"

// join(css.btn, [isPrimary, css.btnPrimary, css.btnSecondary])
// -> "button buttonPrimary"
// -> "button buttonSecondary"

// join(css.btn, [!isPrimary, css.btnSecondary])
// -> "button"
// -> "button buttonSecondary"

module.exports = function join(...classes) {
    return classes.reduce((acc, className, idx) => {
        const space = idx ? " " : "";

        if(!className) {
            return acc;
        }

        if(typeof className === "string") {
            return acc + space + className;
        }

        const test       = className[0];
        const trueClass  = className[1];
        const falseClass = className[2];

        if(test) {
            return acc + space + trueClass;
        }

        if(falseClass) {
            return acc + space + falseClass;
        }

        return acc;
    }, "");
};
