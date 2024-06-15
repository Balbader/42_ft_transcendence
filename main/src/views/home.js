import { createElement } from "../lib/create-element.js";
import rest from "../lib/rest.js";

// const header = createElement("div", null, button)
//     .setStyle({ background: "lightGrey", height: "200px", width: "300px" })
//     .on("click", (event_) => {
//         event_.target.setStyle({ background: "lightgreen" });
//     });


const home = () => {
    const button = createElement("button", { class: "btn btn-outline-dark" })
        .appendText("Load first todo")
        .on("click", async () => {
            try {
                const todos = await rest.get("todos").json();

                todos.forEach(todo => {
                    console.log(`${todo.id} : ${todo.title} - ${todo.completed}`);
                });

                button.textContent = todos[0].id + " is completed? " + todos[0].completed;

            } catch (error) {
                console.error("Failed to load todos:", error);
            }
        });

    const homePage = createElement('div');
    homePage.appendChild(button);
    return homePage;
};

export default home;
