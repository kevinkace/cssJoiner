"use strict";

const fs   = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

const src = require("./src");

const moduleTypes = [{
    name : "cjs",
    tmpl :
`{jsdoc}
module.exports = {src};
`
}, {
    name : "esm",
    tmpl :
`{jsdoc}
export default {src}
`
}];

function stringify(moduleType, src) {
    return moduleType.tmpl
        .replace("{jsdoc}", src.jsdoc)
        .replace("{src}", src.cssJoin.toString());
}

Promise.all(
    moduleTypes.map(moduleType =>
        writeFile(`./dist/${moduleType.name}.js`, stringify(moduleType, src), "utf8")
    )
);
