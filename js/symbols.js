// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/symbols.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#symbols').innerHTML = content;
  });
