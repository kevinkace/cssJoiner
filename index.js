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
    return classes.reduce((acc, className) => {
        if(typeof className === "string") {
            return `${acc} ${className}`;
        }

        const test       = className[0];
        const trueClass  = className[1];
        const falseClass = className[2];

        if(test) {
            return `${acc} ${trueClass}`;
        }

        if(falseClass) {
            return `${acc} ${falseClass}`;
        }

        return acc;
    }, "");
};
