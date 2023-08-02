import app from './global/app';

const openAboutWindow = document.getElementById(app.ABOUT_LINK_A_ELEMENT_ID);
const closeAboutWindow = document.getElementById(app.ABOUT_WINDOW_CLOSE_BTN_ELEMENT_ID);
const backdropAboutWindow = document.getElementById(app.ABOUT_WINDOW_BACKDROP_DIV_ELEMENT_ID);
const aboutWindow = document.getElementById('about-window');

let isWindowOpened = false;

openAboutWindow.addEventListener('click', openModal);

function closeModal(event = null) {
  if (event && event.currentTarget === aboutWindow) {
    return;
  }

  window.removeEventListener('keydown', escapeModal);

  closeAboutWindow.removeEventListener('click', closeModal);
  aboutWindow.removeEventListener('click', closeModal);
  backdropAboutWindow.removeEventListener('click', closeModal);

  backdropAboutWindow.classList.add('hidden');

  isWindowOpened = false;
}

function openModal() {
  backdropAboutWindow.classList.remove('hidden');

  closeAboutWindow.addEventListener('click', closeModal);
  aboutWindow.addEventListener('click', closeModal);
  backdropAboutWindow.addEventListener('click', closeModal);

  window.addEventListener('keydown', escapeModal);

  isWindowOpened = true;
}

function escapeModal(ev) {
  if (ev.key === 'Escape' && isWindowOpened) {
    closeModal();
  }
}
