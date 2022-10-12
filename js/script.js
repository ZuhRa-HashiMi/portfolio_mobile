/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const navSlide = () => {
  const burger = document.querySelector('.humberger-menu');
  const nav = document.querySelector('.desktop-nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};

navSlide();

/* single Project section modal */
const modalBtn = document.querySelector('.project-button');
const modalBg = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalBg.style.visibility = 'visible';
  modalBtn.style.opacity = 1;
});

modalClose.addEventListener('click', () => {
  modalBg.style.visibility = 'hidden';
  modalBg.style.opacity = 0;
});
