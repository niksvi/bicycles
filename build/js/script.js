const mainHeader = document.querySelector('.main-header');
const headerToggle = document.querySelector('.site-nav__toggle');
const mainNav = document.querySelector('.site-nav');

const form = document.querySelector('form');
const inputPhone = form.querySelector('input[name=phone]');
const regularPhone =  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

mainHeader.classList.remove('main-header--nojs');

headerToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('site-nav--closed')) {
    mainNav.classList.remove('site-nav--closed');
    mainNav.classList.add('site-nav--opened');
  } else {
    mainNav.classList.add('site-nav--closed');
    mainNav.classList.remove('site-nav--opened');
  }
});

inputPhone.addEventListener('input', () => {
  if (!regularPhone.test(inputPhone.value)) {
    inputPhone.setCustomValidity('Введите корректный номер телефона');
    inputPhone.style.borderColor = 'red';
    inputPhone.style.boxShadow = '0 0 10px red';

  } else {
    inputPhone.setCustomValidity('');
    inputPhone.style.borderColor = '#c9ccd4';
    inputPhone.style.boxShadow = '0 0 10px #0ad9c6';
  }
  inputPhone.reportValidity();
})
