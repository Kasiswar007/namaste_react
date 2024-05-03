const heading = React.createElement("div", { id: "Parent"}, [
    React.createElement("div" ,{ id: "child1"},[
    React.createElement("h1", {},"This is h1 Tag"),
    React.createElement("h2", {},"This is h2 Tag"),
    ]),
    React.createElement("div" ,{ id: "child2"},[
        React.createElement("h3", {},"This is h3 Tag"),
        React.createElement("h4", {},"This is h4 Tag"),
        ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
