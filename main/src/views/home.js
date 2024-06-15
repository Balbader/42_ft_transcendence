import { createElement } from "../lib/create-element.js";
import rest from "../lib/rest.js";

const home = () => {
    const button = createElement("button", { class: "btn btn-outline-dark" })
        .appendText("Load first todo")
        .on("click", async () => {
            const todos = await rest.get("todos").json();
            console.log("Todo loaded:", todos);
            button.textContent =
                todos.title + " is completed? " + todos.completed;
        });

    // const Home = createElement("div", null, button)
    //     .setStyle({ background: "lightGrey", height: "200px", width: "300px" })
    //     .on("click", (event_) => {
    //         event_.target.setStyle({ background: "lightgreen" });
    //     });

    return button;
};

export default home;
