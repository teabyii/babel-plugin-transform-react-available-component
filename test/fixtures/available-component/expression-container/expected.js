React.createElement(
    "div",
    null,
    available(123) ? React.createElement("div", null) : null,
    available("123") ? React.createElement("div", null) : null,
    available(React.createElement(
        "span",
        null,
        "foo"
    )) ? React.createElement("div", null) : null
);