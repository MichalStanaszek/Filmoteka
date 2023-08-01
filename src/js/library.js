import app from './global/app';

const getFromStorage = key => {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
};

app.getWatchedMovies = function () {
  return getFromStorage(app.LOCAL_STORAGE_WATCH_KEY) || [];
};

app.getQueuedMovies = function () {
  return getFromStorage(app.LOCAL_STORAGE_QUEUE_KEY) || [];
};


//  Funkcja do wyświetlania oglądanych filmów
function showWatched() {
  const watched = app.getWatchedMovies(); // Pobieramy dane o oglądanych filmach z Local Storage
  
  console.log(watched);
}

// Funkcja do wyświetlania filmów do obejrzenia
function showQueue() {
  const queue = app.getQueuedMovies(); // Pobieramy dane o filmach do obejrzenia z Local Storage
  // displayWatchedMovies(queue); // Wyświetlamy listę filmów do obejrzenia na stronie
}

// Przypisujemy event listenery do przycisków
const watchedBtn = document.getElementById(app.WATCHED_BUTTON_ELEMENT_ID);
const queueBtn = document.getElementById(app.QUEUE_BUTTON_ELEMENT_ID);

watchedBtn.addEventListener('click', showWatched);
queueBtn.addEventListener('click', showQueue);

showWatched();
