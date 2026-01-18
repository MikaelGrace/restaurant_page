console.log("Welcome to the restaurant");
import "./styles.css";
import { InitialPageLoad } from "./initialpageload";
import { ContactPage } from "./contacttab";
import { HomePage } from "./hometab";
import { MenuPage } from "./menutab";

import ResturantLogo from "./resturant.png";

const logo = document.createElement("img");
const divContent = document.querySelector("#content");

// logo.src = ResturantLogo;
// document.body.appendChild(logo);
//InitialPageLoad();
const buttons = document.querySelectorAll(".nav-btn");

// const nav = document.querySelector(".nav-btns");

// nav.addEventListener("click", (e) => {
//     const button = e.target.closest("button");
//     if (!button) return;

//     if (button.classList.contains("home-btn")) {

//         HomePage();
//     }
//     else if (button.classList.contains("menu-btn")) {

//     }
//     else if (button.classList.contains("service-btn")) {

//     }
//     else if (button.classList.contains("about-btn")) {

//     }
//     else if (button.classList.contains("contact-btn")) {
//         ContactPage();
//     }
// });


//looping each nav button on click
buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        console.log("clicked");
        if (button.classList.contains("home-btn")) {
            ClearContent();
            HomePage();
        }
        else if (button.classList.contains("menu-btn")) {
            ClearContent();
            MenuPage();
        }
        else if (button.classList.contains("service-btn")) {
            ClearContent();
        }
        else if (button.classList.contains("about-btn")) {
            ClearContent();
        }
        else if (button.classList.contains("contact-btn")) {
            ClearContent();
            ContactPage();
        }

    })
});
// const button = document.querySelector(".nav-btn");
// button.addEventListener("click", () => {
//     divContent.innerHTML = "";
//     ContactPage();
// });

// console.log("This is a test in console");
// alert("This is a test from aler");

//InitialPageLoad();
//ContactPage();

// const buttons = document.querySelectorAll(".nav-btn");

function ClearContent() {
    divContent.replaceChildren();
}


