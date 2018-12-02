// import cssJoin from "./cssJoin";
const cssJoin = require("../dist/cjs");

m.mount(window.mount, {
    toggleB() {
        this.b = !this.b;
    },
    view(vnode) {
        return m("div", { class : cssJoin("a", [ vnode.state.b, "b", "c" ]) },
            "Joined thing",

            m("button", { onclick : () => vnode.state.toggleB() }, "toggle")
        );
    }
})