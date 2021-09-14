'use-strict';

//& Get elements
//& -----------------------------------

const btnsOpenModal = document.querySelectorAll('.open-modal');
// console.log(btnsOpenModal);
const modal = document.querySelector('.modal');
// console.log(modal);
const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnCloseModal);
const overlay = document.querySelector('.overlay');
// console.log(overlay);

//& Open the modal
//& -----------------------------------

const openModal = function () {
  modal.classList.remove('hidden');
};

// Loop through all open buttons, listen to click event
for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i]);
  btnsOpenModal[i].addEventListener('click', openModal);
}

//& Close the modal
//& -----------------------------------

const closeModal = function () {
  modal.classList.add('hidden');
};

// Listen to click event
btnCloseModal.addEventListener('click', closeModal);
