import app from './global/app';

app.getMovieByID = async function (movieId) {
  app.Loading.circle();

  const movie = await app.api.get('movie/' + movieId);

  app.Loading.remove();
  return movie;
};

const MOVIE_WINDOW_ID = 'movie-window';

function onGalleryUlClick(event) {
  const element = event.target;

  if (element.nodeName === 'LI') {
    const movieId = app.getMovieIdFromMovieCardElement(element);

    app.getMovieByID(movieId).then(movie => {
      createMovieWindow(movie);
    });
  }
}

function onKeyPressed(event) {
  if (event.key === "Escape") {
    destroyMovieWindow();
  }
}

function createMovieWindow(movieObject) {
  const backdrop = document.getElementById(
    app.MOVIE_WINDOW_BACKDROP_DIV_ELEMENT_ID
  );
  const movieWindow = document.getElementById(MOVIE_WINDOW_ID);

  const moviePoster =
    'https://image.tmdb.org/t/p/w500' + movieObject.poster_path;
  const movieTitle = movieObject.original_title;
  const movieVote = movieObject.vote_average;
  const movieNumOfVotes = movieObject.vote_count;
  const moviePopularity = movieObject.popularity;
  const movieOrigTitle = movieObject.original_title;
  const movieGenre = movieObject.genres[0].name;
  const movieOverview = movieObject.overview;

  const markup = `
    <button id="close-btn" class="movie-window__close-btn button" type="button">&#9587;</button>
    <div>
      <img class="dummy" src="${moviePoster}" alt="dummy-img" />
    </div>
    <div>
      <h1 class="dummy__title">${movieTitle}</h1>
      <div class="stats">
        <ul class="stats__subtitles">
          <li class="stats__list">Vote / Votes</li>
          <li class="stats__list">Popularity</li>
          <li class="stats__list">Original Title</li>
          <li class="stats__list">Genre</li>
        </ul>
        <ul>
          <li class="stats__result">
            <span class="stats--color">${movieVote}</span> /
            <span class="stats--color2">${movieNumOfVotes}</span>
          </li>
          <li class="stats__result"><span>${moviePopularity}</span></li>
          <li class="stats__result">${movieOrigTitle}</li>
          <li class="stats__result">${movieGenre}</li>
        </ul>
      </div>
      <div class="description">
        <h2 class="description--header">ABOUT</h2>
        <p>${movieOverview}</p>
      </div>
      <div class="modal-buttons">
        <button class="button" type="button" data-movie="${movieObject.id}">ADD TO WATCHED</button>
        <button class="button" type="button" data-movie="${movieObject.id}">ADD TO QUEUE</button>
      </div>
    </div>`;

  movieWindow.insertAdjacentHTML('afterbegin', markup);

  const closeBtn = document.getElementById('close-btn');

  window.addEventListener('keydown', onKeyPressed);

  backdrop.addEventListener('click', destroyMovieWindow);
  closeBtn.addEventListener('click', destroyMovieWindow);

  backdrop.classList.remove('hidden');
}

function destroyMovieWindow() {
  const backdrop = document.getElementById(
    app.MOVIE_WINDOW_BACKDROP_DIV_ELEMENT_ID
  );
  const movieWindow = document.getElementById(MOVIE_WINDOW_ID);
  const closeBtn = document.getElementById('close-btn');

  window.removeEventListener('keydown', destroyMovieWindow);

  backdrop.removeEventListener('click', destroyMovieWindow);
  closeBtn.removeEventListener('click', destroyMovieWindow);

  movieWindow.innerHTML = '';
  backdrop.classList.add('hidden');
}

const galleryDiv = document.getElementById(app.MOVIE_CARDS_PARENT_ELEMENT_ID);
galleryDiv.addEventListener('click', onGalleryUlClick);
