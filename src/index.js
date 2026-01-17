console.log("Welcome to the restaurant");
import { InitialPageLoad } from "./initialpageload";
import { ContactPage } from "./contacttab";
import "./styles.css";
import ResturantLogo from "./resturant.png";

const logo = document.createElement("img");
const divContent = document.querySelector("#content");

logo.src = ResturantLogo;
document.body.appendChild(logo);
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
