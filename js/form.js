// Загрузка содержимого паршала и вставка его на страницу
fetch('parts/form.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#form').innerHTML = content;
  });

function toggleContactInput() {
  const contactSelect = document.querySelector('#contactSelect');
  const phoneInputWrapper = document.querySelector('#phoneInputWrapper');
  const emailInputWrapper = document.querySelector('#emailInputWrapper');

  if (contactSelect.value === 'phone') {
    phoneInputWrapper.classList.remove('d-none');
    emailInputWrapper.classList.add('d-none');
  } else if (contactSelect.value === 'email') {
    phoneInputWrapper.classList.add('d-none');
    emailInputWrapper.classList.remove('d-none');
  } else {
    phoneInputWrapper.classList.add('d-none');
    emailInputWrapper.classList.add('d-none');
  }
}

function validateForm(event) {
  event.preventDefault();

  const contactSelect = document.querySelector('#contactSelect');
  const phoneInput = document.querySelector('#phoneInput');
  const emailInput = document.querySelector('#emailInput');

  let isValid = true;

  if (contactSelect.value === 'phone') {
    const phoneRegex = /^\+?[0-9]{6,14}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.classList.add('is-invalid');
      isValid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
    }
  } else if (contactSelect.value === 'email') {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }
  }

  return isValid;
}
