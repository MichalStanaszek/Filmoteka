import app from './global/app';

// Funkcje do odczytu danych z Local Storage
const getFromStorage = key => {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.messege);
  }
};

app.getWatchedMovies = function () {
  return getFromStorage(app.LOCAL_STORAGE_WATCH_KEY) || [];
};

app.getQueuedMovies = function () {
  return getFromStorage(app.LOCAL_STORAGE_QUEUE_KEY) || [];
};

// Funkcje do zapisu danych do Local Storage
function setWatchedMovies(array) {
  localStorage.setItem(app.LOCAL_STORAGE_WATCH_KEY, JSON.stringify(array));
}

function setQueuedMovies(array) {
  localStorage.setItem(app.LOCAL_STORAGE_QUEUE_KEY, JSON.stringify(array));
}

// Wywołujemy funkcje do odczytu danych i przechowujemy je w zmiennych
const watchedData = app.getWatchedMovies();
const queueData = app.getQueuedMovies();

// Możemy teraz korzystać z danych w zmiennych watchedData i queueData
console.log('Oglądane filmy:', watchedData);
console.log('Filmy do obejrzenia:', queueData);

// function displayWatchedMovies(movies) {
//   const posterListElement = document.getElementById('posterList');
//   posterListElement.innerHTML = '';

//   if (movies.length === 0) {
//     posterListElement.innerHTML = '<p>Brak filmów do wyświetlenia.</p>';
//   } else {
//     movies.forEach(posterUrl => {
//       const posterImageElement = document.createElement('img');
//       posterImageElement.src = posterUrl;
//       posterImageElement.alt = 'Plakat filmowy';
//       posterImageElement.style.maxWidth = '200px';
//       posterListElement.appendChild(posterImageElement);
//     });
//   }
// }

//  Funkcja do wyświetlania oglądanych filmów
function showWatched() {
  const watched = app.getWatchedMovies(); // Pobieramy dane o oglądanych filmach z Local Storage
  // displayWatchedMovies(watched); // Wyświetlamy listę oglądanych filmów na stronie
}

// Funkcja do wyświetlania filmów do obejrzenia
function showQueue() {
  const queue = app.getQueuedMovies(); // Pobieramy dane o filmach do obejrzenia z Local Storage
  // displayWatchedMovies(queue); // Wyświetlamy listę filmów do obejrzenia na stronie
}

// Przypisujemy event listenery do przycisków
const watchedBtn = document.getElementById('watched-button');
const queueBtn = document.getElementById('queue-button');
watchedBtn.addEventListener('click', showWatched);
queueBtn.addEventListener('click', showQueue);

// Wywołujemy funkcję showWatched() automatycznie przy załadowaniu strony
showWatched();
