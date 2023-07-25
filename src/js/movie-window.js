import app from './global/app';

app.apiTest('movie-window.js');

const backdrop = document.querySelector('.backdrop');
//const btn zamienić na const z kartą filmu jak będzie gotowa
const btn = document.querySelector('#btn');
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    backdrop.classList.toggle('hidden');
  };
  
  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function () {
    backdrop.classList.toggle('hidden');
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == backdrop) {
      backdrop.classList.toggle('hidden');
    }
  };
  
  // When the user clicks on Escape key, close the modal
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      backdrop.classList.add('hidden');
    }
  });