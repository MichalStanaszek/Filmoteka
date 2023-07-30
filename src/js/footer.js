import app from './global/app';
const openAboutWindow = document.getElementById('about-us');
const closeAboutWindow = document.getElementById('about-window-close');
const backdropAboutWindow = document.getElementById('about-window-backdrop');

openAboutWindow.addEventListener('click', openModal);

function closeModal() {
  document.removeEventListener('keydown', escapeModal);
  document.removeEventListener('click', closeModal);
  backdropAboutWindow.classList.add('hidden');
}
function openModal() {
  backdropAboutWindow.classList.remove('hidden');
  closeAboutWindow.addEventListener('click', closeModal);
  backdropAboutWindow.addEventListener('keydown', closeModal);
  backdropAboutWindow.addEventListener('click', escapeModal);
}
function escapeModal(ev) {
  if (ev.key === 'Escape' || ev.target === backdropAboutWindow) {
    closeModal();
  }
}
