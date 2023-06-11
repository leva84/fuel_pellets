// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/carousel.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#carousel').innerHTML = content;
  });
