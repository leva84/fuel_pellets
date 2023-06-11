// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/footer.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#footer').innerHTML = content;
  });
