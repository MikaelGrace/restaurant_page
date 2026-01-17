console.log("Welcome to the restaurant");
import { InitialPageLoad } from "./initialpageload";
import { ContactPage } from "./contacttab";

const divContent = document.querySelector("#content");

InitialPageLoad();
const button = document.querySelector(".nav-btn");
button.addEventListener("click", () => {
    divContent.innerHTML = "";
    ContactPage();
})

//InitialPageLoad();
//ContactPage();

// const buttons = document.querySelectorAll(".nav-btn");

// buttons.forEach ((button) => {
//     button.addEventListener("click", () => {
//         if (button.textContent == "Contact") {
//             ContactPage()
//         }

//     })
// });
