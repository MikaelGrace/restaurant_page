export function aboutPage() {
  const divContent = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("about-container");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const intro = document.createElement("p");
  intro.classList.add("about-intro");
  intro.textContent =
    "Savoury Bites started as a small family kitchen and grew into a neighbourhood favourite — serving fresh, flavourful dishes made from time-tested recipes and local ingredients.";

  const mission = document.createElement("p");
  mission.classList.add("about-mission");
  mission.textContent =
    "Our mission is simple: great food, warm service, and a place where friends and family gather to enjoy memorable meals.";

  const teamSection = document.createElement("div");
  teamSection.classList.add("team-section");

  const teamTitle = document.createElement("h2");
  teamTitle.textContent = "Our Team";

  const teamList = document.createElement("div");
  teamList.classList.add("team-list");

  const members = [
    { name: "Aisha - Head Chef", role: "Creative lead for our menu" },
    { name: "Kofi - Manager", role: "Front-of-house and events" },
    { name: "Maya - Pastry", role: "Desserts and baking" },
  ];

  members.forEach((m) => {
    const item = document.createElement("div");
    item.classList.add("team-member");

    const memName = document.createElement("h3");
    memName.textContent = m.name;

    const memRole = document.createElement("p");
    memRole.textContent = m.role;

    item.append(memName, memRole);
    teamList.appendChild(item);
  });

  teamSection.append(teamTitle, teamList);

  container.append(title, intro, mission, teamSection);
  divContent.appendChild(container);
}
