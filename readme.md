# cssJoiner

[![Node.js Package](https://github.com/kevinkace/cssJoiner/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/kevinkace/cssJoiner/actions/workflows/npm-publish.yml)

Conditionally join CSS classes.

## Examples

Simple joining 2 class names.

```js
cssJoiner("button", "buttonPrimary");
// "button buttonPrimary"
```

Usually I'm using class names in an obj.

```js
cssJoiner(css.btn, css.primary);
// "button buttonPrimary"
```

If a class name is actually an array, then the pattern is [test, trueClass, falseClass]

```js
cssJoiner(css.btn, [ btnType === "primary", css.primary ])
// "button buttonPrimary" or "button"

cssJoiner(css.btn, [ btnType === "primary", css.primary, css.secondary ])
// "button buttonPrimary" or "button buttonSecondary"
```

An example with Mithril

```js
const component = {
    view : (vnode) =>
        m("div", {
            class : cssJoiner(btnCss.btn, [ vnode.state.selected, css.selected ])
        })
};
```
