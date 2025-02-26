// Функция для переключения футеров в зависимости от ширины экрана
export function updateFooter() {
  const largeFooter = document.getElementById("footer-large");
  const smallFooter = document.getElementById("footer-small");

  largeFooter.classList.remove("active");
  smallFooter.classList.remove("active");

  if (window.innerWidth > 1168) {
    largeFooter.classList.add("active");
  } else {
    smallFooter.classList.add("active");
  }
}

// window.addEventListener("resize", updateFooter);
