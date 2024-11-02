document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector('.accordion');
  const accordionContent = document.querySelector('.accordion-content');
  const btnIncrement = document.querySelector('.quantity button:last-child');
  const btnDecrement = document.querySelector('.quantity button:first-child');
  const inputQuantity = document.querySelector('.quantity input');
  const overlay = document.querySelector('.overlay');
  const card_s205 = document.querySelector('#card_s205');
  const card_p108 = document.querySelector('#card_p108');
  const modal_s205 = document.querySelector('#moda_s205');
  const modal_p108 = document.querySelector('#modal_p108');

  if (card_s205 && overlay) {
    card_s205.addEventListener('click', () => {
      modal_s205.style.display = 'block';
      overlay.style.display = 'block';
    });
  }

  if (card_p108 && overlay) {
    card_p108.addEventListener('click', () => {
      modal_p108.style.display = 'block';
      overlay.style.display = 'block';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      modal_s205.style.display = 'none';
      modal_p108.style.display = 'none';
      overlay.style.display = 'none';
      sidebar.style.display = 'none';
    });
  }

  if (accordion && accordionContent) {
    accordion.addEventListener('click', () => {
      accordionContent.style.display = accordionContent.style.display === 'none' ? 'block' : 'none';
      accordion.querySelector('span').textContent = accordionContent.style.display === 'none' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    });
  }

  if (btnIncrement && inputQuantity) {
    btnIncrement.addEventListener('click', () => {
      inputQuantity.value = parseInt(inputQuantity.value) + 1;
    });
  }

  if (btnDecrement && inputQuantity) {
    btnDecrement.addEventListener('click', () => {
      if (parseInt(inputQuantity.value) <= 1)
        return;
      inputQuantity.value = parseInt(inputQuantity.value) - 1;
    });
  }
});
const sidebar = document.querySelector('.sidebar');
const btnMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

if (overlay) {
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    sidebar.style.display = 'none';
  });
}

function toggleMenu() {
  sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
}

if (btnMenu) {
  btnMenu.addEventListener('click', toggleMenu);
}




