import app from './global/app';

function getFromStorage(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

async function showWatched() {
  app.Loading.circle();
  
  const gallery = document.getElementById(app.MOVIE_CARDS_PARENT_ELEMENT_ID);
  const watched = getFromStorage(app.LOCAL_STORAGE_WATCH_KEY) || [];

  let html = '';

  for (const movie of watched) {
    html += await app.renderMovieCardHTML(movie);
  }

  gallery.innerHTML = html;

  app.Loading.remove();
}

async function showQueue() {
  app.Loading.circle();

  const gallery = document.getElementById(app.MOVIE_CARDS_PARENT_ELEMENT_ID);
  const watched = getFromStorage(app.LOCAL_STORAGE_QUEUE_KEY) || [];

  gallery.innerHTML = await app.renderMovieCardHTML(watched);

  app.Loading.remove();
}

const watchedBtn = document.getElementById(app.WATCHED_BUTTON_ELEMENT_ID);
const queueBtn = document.getElementById(app.QUEUE_BUTTON_ELEMENT_ID);

watchedBtn.addEventListener('click', showWatched);
queueBtn.addEventListener('click', showQueue);

showWatched();
