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
    <div class="movie-window__poster">
      <img src="${moviePoster}" alt="'${movieTitle}' movie poster." />
    </div>
    <div class="movie-window__details">
      <h1 class="movie-window__title">${movieTitle}</h1>
      <div class="movie-window__stats">
        <ul class="stats-subtitles">
          <li class="stats-list">Vote / Votes</li>
          <li class="stats-list">Popularity</li>
          <li class="stats-list">Original Title</li>
          <li class="stats-list">Genre</li>
        </ul>
        <ul>
          <li class="stats-result">
            <span class="stats-color">${movieVote}</span> /
            <span class="stats-color2">${movieNumOfVotes}</span>
          </li>
          <li class="stats-result"><span>${moviePopularity}</span></li>
          <li class="stats-result">${movieOrigTitle}</li>
          <li class="stats-result">${movieGenre}</li>
        </ul>
      </div>
      <div class="movie-window__description">
        <h2 class="description-header">ABOUT</h2>
        <p>${movieOverview}</p>
      </div>
      <div class="movie-window__modal-buttons">
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
