const cardTemplate = document.querySelector("[data-user-template]").content;
const cardContainer = document.querySelector("[data-user-cards-container]");
let cards = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then(
    (data) =>
      (cards = data.map((user) => {
        const card = cardTemplate.cloneNode(true).children[0];
        const header = card.querySelector("[data-user-name]");
        const body = card.querySelector("[data-user-email]");
        header.textContent = user.name;
        body.textContent = user.email;
        cardContainer.append(card);
        return {
          name: user.name.toLowerCase(),
          email: user.email.toLowerCase(),
          element: card,
        };
      }))
  );

const input = document.querySelector("[data-search]");
input.addEventListener("input", (e) => {
  let ip = e.target.value;
  cards.forEach((user) => {
    const isVisible = user.name.includes(ip) || user.email.includes(ip);
    user.element.classList.toggle("hide", !isVisible);
  });
});
