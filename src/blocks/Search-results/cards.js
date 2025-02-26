import item1 from "/src/img/item1.jpg";
import item2 from "/src/img/item2.jpg";
import item3 from "/src/img/item3.jpg";

// Данные для карточек
const cardData = [
  {
    id: "light1",
    title: "Встраиваемый светильник Markt",
    priceCurrent: "3 490 ₽",
    priceOld: "5 060 ₽",
    badge: "Акция",
    image: item1,
  },
  {
    id: "light2",
    title: "Линейный светильник ARG",
    priceCurrent: "6 700 ₽",
    priceOld: null,
    badge: null,
    image: item2,
  },
  {
    id: "light3",
    title: "Сведодиодный светильник ",
    priceCurrent: "5 060 ₽",
    priceOld: "6 060 ₽",
    badge: "Акция",
    image: item3,
  },
  {
    id: "light4",
    title: "Встраиваемый светильник Markt",
    priceCurrent: "3 490 ₽",
    priceOld: null,
    badge: null,
    image: item1,
  },
  {
    id: "light5",
    title: "Линейный светильник ARG",
    priceCurrent: "6 700 ₽",
    priceOld: "6 060 ₽",
    badge: "Акция",
    image: item2,
  },
  {
    id: "light6",
    title: "Сведодиодный светильник ",
    priceCurrent: "5 060 ₽",
    priceOld: null,
    badge: null,
    image: item3,
  },
  {
    id: "light7",
    title: "Встраиваемый светильник Markt",
    priceCurrent: "3 490 ₽",
    priceOld: "6 060 ₽",
    badge: "Акция",
    image: item1,
  },
  {
    id: "light8",
    title: "Линейный светильник ARG",
    priceCurrent: "6 700 ₽",
    priceOld: null,
    badge: null,
    image: item2,
  },
];

// Функция для изменения цвета текста
function updateCardStyles() {
  const idsToUpdate = ["light2", "light4", "light6", "light8"];

  idsToUpdate.forEach((id) => {
    const card = document.querySelector(
      `.search-results__card[data-id="${id}"]`
    );
    if (card) {
      const priceCurrentElement = card.querySelector(
        ".search-results__card-price-current"
      );
      if (priceCurrentElement) {
        priceCurrentElement.style.color = "#231815";
      }
    }
  });
}

// Основная функция рендера карточек
export function renderCards() {
  const container = document.getElementById("cards-container");

  cardData.forEach(({ id, title, priceCurrent, priceOld, badge, image }) => {
    const cardHTML = `
      <div class="search-results__card" data-id="${id}">
        <div class="search-results__card-img-wrapper">
          <img src="${image}" alt="${title}" class="search-results__card-img" />
          <div class="search-results__card-rectangle">
            <button class="search-results__card-btn">Подробнее</button>
          </div>
        </div>
        <div class="search-results__card-info">
          <h3 class="search-results__card-text">${title}</h3>
          <div class="search-results__card-price">
            <span class="search-results__card-price-current">${priceCurrent}</span>
            ${
              priceOld
                ? `<span class="search-results__card-price-old">${priceOld}</span>`
                : ""
            }
          </div>
        </div>
        ${badge ? `<div class="search-results__card-badge">${badge}</div>` : ""}
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  updateCardStyles();
}