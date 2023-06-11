// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/columns.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#columns').innerHTML = content;
  });
