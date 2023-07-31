import app from './global/app';

app.getMoviesTodayTrends = async function (page = app.currentPage) {
  const galleryULElement = document.getElementById(
    app.MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  app.Loading.circle();

  const movies = await app.api.get(`movie/popular?page=${page}`);
  const movieCards = await app.showMovieCards(movies);

  galleryULElement.innerHTML = movieCards;

  app.currentPage = movies.page;
  app.totalPages = movies.total_pages;
  app.Loading.remove();
};

app.renderMovieCardHTML = async function (movieId) {
  const movieObject = await app.api.get('movie/' + movieId);
  const moviePoster = 'https://image.tmdb.org/t/p/w500' + movieObject.poster_path;
  const movieYear = movieObject.release_date.split('-')[0];
  const movieTitle = movieObject.original_title;
  const genresArray = [];

  let genres = '';

  for (const genre of movieObject.genres) {
    genresArray.push(genre.name);
  }

  if (genresArray.length > 2) {
     genres = `${genresArray[0]}, ${genresArray[1]}, Other`;
  } else {
     genres = genresArray.join(", ");
  }  

  return `
   <li class = "movie-card" id="${app.createMovieCardId(movieId)}">
       <div class="movie-thumb">
        <img class="movie-image" src="${moviePoster}" alt="Poster image" loading="lazy" />
       </div>
      <div class="movie-info">
        <p class="movie-name">${movieTitle}</p>
        <p class="movie-genres">${genres} | ${movieYear}</p>
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

app.getMoviesTodayTrends();
