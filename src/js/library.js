import app from './global/app';

app.apiTest('library.js');

// Zmienne do symulacji danych w Local Storage
const localStorageData = {
  watched: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'],
  queue: ['poster4.jpg', 'poster5.jpg', 'poster6.jpg'],
};

// Funkcja symulująca odczyt z Local Storage, w przyszłości np id
function getFromStorage(key) {
  return localStorageData[key] || [];
}

// Stałe do identyfikacji kluczy w Local Storage
const LOCAL_STORAGE_WATCH_KEY = 'watched';
const LOCAL_STORAGE_QUEUE_KEY = 'queue';

// Funkcje do odczytu danych z Local Storage
function getWatchedMovies() {
  return getFromStorage(LOCAL_STORAGE_WATCH_KEY) || [];
}

function getQueuedMovies() {
  return getFromStorage(LOCAL_STORAGE_QUEUE_KEY) || [];
}

// Funkcje do zapisu danych do Local Storage
function setWatchedMovies(array) {
  localStorageData[LOCAL_STORAGE_WATCH_KEY] = array;
}

function setQueuedMovies(array) {
  localStorageData[LOCAL_STORAGE_QUEUE_KEY] = array;
}

// Wywołujemy funkcje do odczytu danych i przechowujemy je w zmiennych
const watchedData = getWatchedMovies();
const queueData = getQueuedMovies();

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

// Funkcja do wyświetlania oglądanych filmów
function showWatched() {
  const watched = getWatchedMovies(); // Pobieramy dane o oglądanych filmach z Local Storage
  // displayWatchedMovies(watched); // Wyświetlamy listę oglądanych filmów na stronie
}

// Funkcja do wyświetlania filmów do obejrzenia
function showQueue() {
  const queue = getQueuedMovies(); // Pobieramy dane o filmach do obejrzenia z Local Storage
  displayWatchedMovies(queue); // Wyświetlamy listę filmów do obejrzenia na stronie
}

// Przypisujemy event listenery do przycisków
const watchedBtn = document.getElementById('watched-button');
const queueBtn = document.getElementById('queue-button');
watchedBtn.addEventListener('click', showWatched);
queueBtn.addEventListener('click', showQueue);

// Wywołujemy funkcję showWatched() automatycznie przy załadowaniu strony
showWatched();
