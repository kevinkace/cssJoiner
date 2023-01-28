import cssJoiner from "cssJoiner";

export function myComponent(attrs) {
    return <div classList={cssJoiner([ attrs.main, "main", "secondary" ])}></div>;
}
