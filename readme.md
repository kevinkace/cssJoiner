# cssJoin

Conditionally join CSS classes.

## Examples

Simple joining 2 class names.

```js
cssJoin("button", "buttonPrimary");
// "button buttonPrimary"
```

Usually I'm using class names in an obj.

```js
cssJoin(css.btn, css.primary);
// "button buttonPrimary"
```

If a class name is actually an array, then the pattern is [test, trueClass, falseClass]

```js
cssJoin(css.btn, [ btnType === "primary", css.primary ])
// "button buttonPrimary" or "button"

cssJoin(css.btn, [ btnType === "primary", css.primary, css.secondary ])
// "button buttonPrimary" or "button buttonSecondary"
```

An example with Mithril

```js
const component = {
    view : (vnode) =>
        m("div", {
            class : cssJoin(btnCss.btn, [ vnode.state.selected, css.selected ])
        })
};
```
