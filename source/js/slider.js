let sliderButtonBefore = document.querySelector('.slider__button--before');
let sliderButtonAfter = document.querySelector('.slider__button--after');
let sliderRange = document.querySelector('.slider__range');
let sliderContentBefore = document.querySelector('.slider__img--before');
let sliderContentAfter = document.querySelector('.slider__img--after');

sliderButtonAfter.addEventListener('click', function() {
  sliderContentBefore.classList.remove('slider__img--display');
  sliderContentAfter.classList.add('slider__img--display');
  sliderRange.value = 2;
});

sliderButtonBefore.addEventListener('click', function() {
  sliderContentAfter.classList.remove('slider__img--display');
  sliderContentBefore.classList.add('slider__img--display');
  sliderRange.value = 1;
});

sliderRange.addEventListener('change', function() {
  if (sliderRange.value == 2) {
    sliderContentBefore.classList.remove('slider__img--display');
    sliderContentAfter.classList.add('slider__img--display');
  } else {
    sliderContentAfter.classList.remove('slider__img--display');
    sliderContentBefore.classList.add('slider__img--display');
  }
})
