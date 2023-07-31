import app from './global/app';

const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('#gallery');
const movieWindow = document.querySelector('.window');

const markup = `<span class="close">&#10006;</span>
<div class="movie-window--flex">
  <div>
    <img
      class="dummy"
      src="/src/images/header/header-gallery/header-mobile.png"
      alt="dummy-img"
    />
  </div>
  <div>
    <h1 class="dummy__title">MOVIE TITLE</h1>
    <div class="stats">
      <ul classs="stats__subtitles">
        <li class="stats__list">Vote / Votes</li>
        <li class="stats__list">Popularity</li>
        <li class="stats__list">Original Title</li>
        <li class="stats__list">Genre</li>
      </ul>
      <ul>
        <li class="stats__result">
          <span class="stats--color">7.3</span> /
          <span class="stats--color2">1260</span>
        </li>
        <li class="stats__result"><span>100.2</span></li>
        <li class="stats__result">A FISTFUL OF LEAD</li>
        <li class="stats__result">Western</li>
      </ul>
    </div>
    <section class="description">
      <h2 class="description--header">ABOUT</h2>
      <p>
        Four of the West’s most infamous outlaws assemble to steal a huge
        stash of gold from the most corrupt settlement of the gold rush
        towns. But not all goes to plan one is killed and the other three
        escapes with bags of gold hide out in the abandoned gold mine where
        they happen across another gang of three – who themselves were
        planning to hit the very same bank! As tensions rise, things go from
        bad to worse as they realise the bags of gold are filled with
        lead... they’ve been double crossed – but by who and how?
      </p>
    </section>
    <div class="modal-buttons">
      <button class="button" type="button">ADD TO WATCHED</button>
      <button class="button" type="button">ADD TO QUEUE</button>
    </div>
  </div> 
</div>`;
movieWindow.insertAdjacentHTML('beforeend', markup);

const closeBtn = document.querySelector('.close');

window.addEventListener('keydown', closeModal);
backdrop.addEventListener('click', closeModal);

function toggleModal() {
  backdrop.classList.toggle('hidden');
}

function openModal() {
  modalCard.addEventListener('click', toggleModal);
}
openModal();

function closeModal(event) {
  if (event.key === 'Escape' || event.target === backdrop) {
    toggleModal();
  } else {
    closeBtn.addEventListener('click', toggleModal);
  }
  backdrop.classList.add('hidden');
}
// window.removeEventListener('keydown', closeModal);
