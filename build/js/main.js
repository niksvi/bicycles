(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const mainHeader = document.querySelector('.main-header');
  const headerToggle = document.querySelector('.site-nav__toggle');
  const mainNav = document.querySelector('.site-nav');

  const page = document.querySelector('.page');
  const form = document.querySelector('form');
  const inputPhone = form.querySelector('input[name=phone]');
  const regularPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  // Menu

  function scrollTo() {
    if (links && mainNav) {
      for (const link of links) {
        link.addEventListener('click', (evt) => {
          evt.preventDefault();
          const blockID = link.getAttribute('href').substr(1);
          if (mainNav.classList.contains('site-nav--opened')) {
            closeMenu();
          }
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      }
    }
  }

  scrollTo();

  function openMenu() {
    if (mainNav && page) {
      mainNav.classList.remove('site-nav--closed');
      mainNav.classList.add('site-nav--opened');
      page.classList.add('page--opened-menu');
    }
  }

  function closeMenu() {
    if (mainNav && page) {
      mainNav.classList.remove('site-nav--opened');
      mainNav.classList.add('site-nav--closed');
      page.classList.remove('page--opened-menu');
    }
  }

  if (mainHeader) {
    mainHeader.classList.remove('main-header--nojs');
  }

  if (headerToggle && mainNav) {
    headerToggle.addEventListener('click', () => {
      if (mainNav.classList.contains('site-nav--closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  // Validate
  if (inputPhone) {
    inputPhone.addEventListener('input', () => {
      if (!regularPhone.test(inputPhone.value)) {
        inputPhone.setCustomValidity('Введите корректный номер телефона');
      } else {
        inputPhone.setCustomValidity('');
      }
      inputPhone.reportValidity();
    });
  }
})();
