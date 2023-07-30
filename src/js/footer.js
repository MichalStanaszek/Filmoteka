import app from './global/app';

const openAboutWindow = document.getElementById(app.ABOUT_LINK_A_ELEMENT_ID);
const closeAboutWindow = document.getElementById('about-window-close');
const backdropAboutWindow = document.getElementById(app.ABOUT_WINDOW_BACKDROP_DIV_ELEMENT_ID);

openAboutWindow.addEventListener('click', openModal);

function closeModal() {
  window.removeEventListener('keydown', escapeModal);

  closeAboutWindow.removeEventListener('click', closeModal);
  backdropAboutWindow.removeEventListener('click', closeModal);

  backdropAboutWindow.classList.add('hidden');
}
function openModal() {
  backdropAboutWindow.classList.remove('hidden');

  closeAboutWindow.addEventListener('click', closeModal);
  backdropAboutWindow.addEventListener('click', closeModal);

  window.addEventListener('keydown', escapeModal);
}
function escapeModal(ev) {
  if (ev.key === 'Escape' || ev.target === backdropAboutWindow) {
    closeModal();
  }
}
