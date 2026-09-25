export function ServicePage() {
  const divContent = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("services-container");

  const title = document.createElement("h1");
  title.textContent = "Our Services";

  const intro = document.createElement("p");
  intro.textContent = "We offer a range of services to make your experience special — dine-in, takeout, catering, and private events.";

  const list = document.createElement("div");
  list.classList.add("services-list");

  const services = [
    { name: "Dine-In", desc: "Comfortable seating, full menu, and table service." },
    { name: "Takeout", desc: "Order ahead and pick up hot, ready-to-eat meals." },
    { name: "Catering", desc: "Custom menus for events and celebrations." },
    { name: "Private Events", desc: "Reserve space for private dinners and parties." },
  ];

  services.forEach((s) => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    const name = document.createElement("h3");
    name.textContent = s.name;

    const desc = document.createElement("p");
    desc.textContent = s.desc;

    card.append(name, desc);
    list.appendChild(card);
  });

  container.append(title, intro, list);
  divContent.appendChild(container);
}
