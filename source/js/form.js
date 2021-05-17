let formSubmit = document.querySelector(".form__button");
let formInputs = document.querySelectorAll("input[required]");

formInputs.forEach(function (formInput) {
  formSubmit.addEventListener('click', function () {
    if (!formInput.value) {
      formInput.classList.add('form__input--error');
    } else {
      formInput.classList.remove('form__input--error');
    }
  })
})
