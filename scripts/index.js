'use-strict';

//& Get elements
//& -----------------------------------

const btnsOpenModal = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//& Open the modal
//& -----------------------------------

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Loop through all open buttons, listen to click event
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//& Close the modal
//& -----------------------------------

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Listen to click event
btnCloseModal.addEventListener('click', closeModal);

//~ Close the modal by pressing esc key
// Listen to keydown event on the document
document.addEventListener('keydown', (e) => {
  // Get the value of the key property
  if (e.key === 'Escape') closeModal();
});
