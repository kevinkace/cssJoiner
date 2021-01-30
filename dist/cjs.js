/**
 * Class array
 * @typedef {Object} ClassType
 * @property {Object} 0 - Condition to decide which/whether class
 * @property {string} 1 - true class name
 * @property {string} 2 - false class name
 */

/**
 * Conditionally join CSS class names
 * @param {...string|ClassType} classes - css class name string, or array [ condition, trueClass, falseClass ]
*/
module.exports = function cssJoin(...classes) {
    return classes.reduce((acc, className, idx) => {
        const space = idx ? " " : "";

        // bad data
        if(!className) {
            return acc;
        }

        // just a class name
        if(typeof className === "string") {
            return acc + space + className;
        }

        // bad data
        if (typeof className !== "object" || !Array.isArray(className)) {
            return acc;
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
