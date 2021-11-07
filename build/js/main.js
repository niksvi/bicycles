const links = document.querySelectorAll('a[href^="#"]');
const mainHeader = document.querySelector('.main-header');
const headerToggle = document.querySelector('.site-nav__toggle');
const mainNav = document.querySelector('.site-nav');

const main = document.querySelector('main');
const footer = document.querySelector('footer');
const form = document.querySelector('form');
const inputPhone = form.querySelector('input[name=phone]');
const regularPhone =  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

// Menu

function scrollTo() {
  for (let link of links) {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      const blockID = link.getAttribute('href').substr(1);
      if (mainNav.classList.contains('site-nav--opened')) {
        closeMenu();
      }
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }
}

scrollTo();

function openMenu() {
  mainNav.classList.remove('site-nav--closed');
  mainNav.classList.add('site-nav--opened');
  main.style.display = 'none';
  footer.style.display = 'none';
}

function closeMenu() {
  mainNav.classList.remove('site-nav--opened');
  mainNav.classList.add('site-nav--closed');
  main.style.display = '';
  footer.style.display = '';
}

mainHeader.classList.remove('main-header--nojs');

headerToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('site-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Validate

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
