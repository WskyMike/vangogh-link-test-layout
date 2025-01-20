import { updateFooter } from "/src/blocks/Footer/FooterHandler.js";
import { renderCards } from "/src/blocks/Search-results/Cards.js";

// Инициализация при загрузке страницы
updateFooter();

// Добавление события `resize`
window.addEventListener("resize", updateFooter);

// Рендер карточек
renderCards();