React.createElement(
    "div",
    null,
    available("foo") ? React.createElement("h1", null) : null,
    React.createElement("div", { classname: "foo" }),
    React.createElement(
        "ul",
        null,
        available("foo") ? React.createElement("li", null) : null
    )
);