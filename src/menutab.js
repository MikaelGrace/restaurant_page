export function MenuPage() {

    // Page title
    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    // Menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Menu data
    const menuItems = [
        {
            name: "Jollof Rice",
            description: "Smoky West African jollof with grilled chicken",
            price: "₦3,500"
        },
        {
            name: "Fried Rice",
            description: "Vegetable fried rice with shrimp",
            price: "₦4,000"
        },
        {
            name: "Egusi Soup",
            description: "Melon seed soup with assorted meat",
            price: "₦5,000"
        },
        {
            name: "Pepper Soup",
            description: "Spicy goat meat pepper soup",
            price: "₦4,500"
        }
    ];

    // Build menu cards
    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        const price = document.createElement("span");
        price.textContent = item.price;

        card.append(name, desc, price);
        menuContainer.appendChild(card);
    });

    content.append(title, menuContainer);
}




