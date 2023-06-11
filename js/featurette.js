// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/featurette.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#featurette').innerHTML = content;
  });
