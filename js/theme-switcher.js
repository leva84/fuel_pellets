// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/theme_switcher.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#theme-switcher').innerHTML = content;

    // Добавление обработчика событий для кнопок выбора темы
    document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
      btn.addEventListener('click', event => {
        // Получение выбранной темы
        let theme = event.currentTarget.getAttribute('data-bs-theme-value');

        // Изменение класса body в зависимости от выбранной темы
        if (theme === 'dark') {
          document.body.classList.add('theme-dark');
        } else {
          document.body.classList.remove('theme-dark');
        }
      });
    });
  });
