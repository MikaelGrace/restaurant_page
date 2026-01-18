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
            price: "₦3,500",
            image: "https://cheflolaskitchen.com/wp-content/uploads/2025/07/Jollof-Rice.jpg"
        },
        {
            name: "Fried Rice",
            description: "Vegetable fried rice with shrimp",
            price: "₦4,000",
            image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/shrimp-fried-rice-5-500x500.jpg"
        },
        {
            name: "Egusi Soup",
            description: "Melon seed soup with assorted meat",
            price: "₦5,000",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8NYGv4dcc8B6HsHG_9tI055auubuS_QhRg&s"
        },
        {
            name: "Pepper Soup",
            description: "Spicy goat meat pepper soup",
            price: "₦4,500",
            image: "https://shopafricausa.com/cdn/shop/articles/Goat-Meat-Peppersoup-Wazobia-African-Market_1669x.jpg?v=1697638103"
        }
    ];

    // Build menu cards
    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = item.image;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        const price = document.createElement("span");
        price.textContent = item.price;

        card.append(img, name, desc, price);
        menuContainer.appendChild(card);
    });

    content.append(title, menuContainer);
}




