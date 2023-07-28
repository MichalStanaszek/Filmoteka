import app from './global/app';

const galleryULElement = document.getElementById(app.MOVIE_CARDS_PARENT_ELEMENT_ID);

app.getMoviesTodayTrends = async function () {
  return await app.api.get('trending/movie/day');
};

app.renderMovieCardHTML = async function (movieId) {
  const movieObject = await app.api.get('movie/' + movieId);
  const poster = movieObject.poster_path;
  const movieGenres = [];

  for (const genre of movieObject.genres) {
    movieGenres.push(genre.name);
  }

  const title = movieObject.original_title;
  const votes = movieObject.vote_average;
  const popularity = movieObject.popularity;
  const about = movieObject.overview;

  return `
   <li class = "movie-card">
       <div class="movie-thumb">
        <img class="movie-image" src="${poster}" alt="${movieGenres}" loading="lazy" />
       </div>
      <div class="movie-info">
        <p class="movie-name">${title}</p>
        <p class="movie-descr"> ${about} </p>
        <p class="movie-genres">${movieGenres}</p>
        <p class="movie-votes">${votes}</p>
        <p class="movie-popularity">${popularity}</p>
      </div>
    </li>`;
};

app.showMovieCards = async function (moviesArray) {
  let html = '';

  for (const movie of moviesArray.results) {
    html += await app.renderMovieCardHTML(movie.id);
  }

  return html;
};

app
  .getMoviesTodayTrends()
  .then(movies => {
    return app.showMovieCards(movies);
  })
  .then(movieCards => {
    galleryULElement.insertAdjacentHTML('afterbegin', movieCards);
  });
