// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/header.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#header').innerHTML = content;
  });
