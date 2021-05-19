let sliderButtonBefore = document.querySelector('.slider__button--before');
let sliderButtonAfter = document.querySelector('.slider__button--after');
let sliderRange = document.querySelector('.slider__range');
let sliderContentBefore = document.querySelector('.slider__img--before');
let sliderContentAfter = document.querySelector('.slider__img--after');
let sliderContentMedium = document.querySelector('.slider__img--medium');
let sliderBlockMedium = document.querySelector('.slider');
let smallDevice = window.matchMedia('(max-width: 767px)');

function sliderControl(smallDevice) {
  if (smallDevice.matches) {
    sliderRange.setAttribute('max', '2');
    sliderContentMedium.classList.remove('slider__img--display');
    sliderContentAfter.classList.remove('slider__img--display');
    sliderRange.value = 1;
    sliderContentBefore.classList.add('slider__img--display');

    sliderButtonAfter.addEventListener('click', function () {
      sliderContentBefore.classList.remove('slider__img--display');
      sliderContentAfter.classList.add('slider__img--display');
      sliderContentMedium.classList.remove('slider__img--display');
      sliderRange.value = 2;
    });

    sliderButtonBefore.addEventListener('click', function () {
      sliderContentAfter.classList.remove('slider__img--display');
      sliderContentBefore.classList.add('slider__img--display');
      sliderContentMedium.classList.remove('slider__img--display');
      sliderRange.value = 1;
    });

    sliderRange.addEventListener('change', function () {
      if (sliderRange.value == 2) {
        sliderContentBefore.classList.remove('slider__img--display');
        sliderContentMedium.classList.remove('slider__img--display');
        sliderContentAfter.classList.add('slider__img--display');
      } else {
        sliderContentAfter.classList.remove('slider__img--display');
        sliderContentBefore.classList.add('slider__img--display');
        sliderContentMedium.classList.remove('slider__img--display');
      }
    });
  } else {
    sliderRange.setAttribute('max', '3');
    sliderRange.value = 2;
    sliderContentMedium.classList.add('slider__img--display');
    sliderContentAfter.classList.remove('slider__img--display');
    sliderContentBefore.classList.remove('slider__img--display');
    sliderBlockMedium.classList.add('slider--medium');

    sliderButtonAfter.addEventListener('click', function () {
      sliderContentBefore.classList.remove('slider__img--display');
      sliderContentMedium.classList.remove('slider__img--display');
      sliderContentAfter.classList.add('slider__img--display');
      sliderBlockMedium.classList.remove('slider--medium');
      sliderRange.value = 3;
    });

    sliderButtonBefore.addEventListener('click', function () {
      sliderContentAfter.classList.remove('slider__img--display');
      sliderContentMedium.classList.remove('slider__img--display');
      sliderContentBefore.classList.add('slider__img--display');
      sliderBlockMedium.classList.remove('slider--medium');
      sliderRange.value = 1;
    });

    sliderRange.addEventListener('change', function () {
      if (sliderRange.value == 3) {
        sliderContentBefore.classList.remove('slider__img--display');
        sliderContentMedium.classList.remove('slider__img--display');
        sliderContentAfter.classList.add('slider__img--display');
        sliderBlockMedium.classList.remove('slider--medium');
      } else if (sliderRange.value == 2) {
        sliderContentAfter.classList.remove('slider__img--display');
        sliderContentBefore.classList.remove('slider__img--display');
        sliderContentMedium.classList.add('slider__img--display');
        sliderBlockMedium.classList.add('slider--medium');
      } else {
        sliderContentMedium.classList.remove('slider__img--display');
        sliderContentAfter.classList.remove('slider__img--display');
        sliderContentBefore.classList.add('slider__img--display');
        sliderBlockMedium.classList.remove('slider--medium');
      }
    });
  }
};
sliderControl(smallDevice);
smallDevice.addListener(sliderControl);
