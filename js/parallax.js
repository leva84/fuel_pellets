// Получение элемента <body>
const parallax = document.querySelector('.parallax');

// Добавление обработчика события прокрутки страницы
window.addEventListener('scroll', () => {
  // Вычисление смещения фонового изображения
  const offset = -window.pageYOffset / 10;
  // Изменение позиции фонового изображения
  parallax.style.backgroundPositionY = `${offset}px`;
});
