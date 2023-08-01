import app from './global/app';

app.getMoviesTodayTrends = async function () {
  app.Loading.circle();

  const galleryULElement = document.getElementById(
    app.MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  const movies = await app.api.get(`movie/popular?page=${app.currentPage}`);
  const movieCards = await app.showMovieCards(movies);

  galleryULElement.innerHTML = movieCards;

  app.totalPages = movies.total_pages;
  app.setPaginationButtons();
  app.Loading.remove();
};

app.getMoviesByKeyWord = async function (keyword) {
  app.Loading.circle();

  const galleryULElement = document.getElementById(
    app.MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  galleryULElement.innerHTML = '';

  const movies = await app.api.get(
    `discover/movie?with_keywords=${keyword}&page=${app.currentPage}`
  );
  const movieCards = await app.showMovieCards(movies);


  app.Loading.remove();

  if (movies.total_results > 0) {
    app.currentKeyword = keyword;
    app.totalPages = movies.total_pages;
    app.onSearchSuccess();
    galleryULElement.innerHTML = movieCards;
  } else {
    app.currentKeyword = '';
    app.totalPages = 0;
    app.onSearchFailed();
  }

  app.setPaginationButtons();
};

app.renderMovieCardHTML = async function (movieId) {
  try {
    const movieObject = await app.api.get('movie/' + movieId);

    const moviePoster =
      'https://image.tmdb.org/t/p/w500' + movieObject.poster_path;
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
      genres = genresArray.join(', ');
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
  } catch (error) {
    console.log('API: Movie ' + movieId + " don't exist in api database!");

    return '';
  }
};

app.showMovieCards = async function (moviesArray) {
  let html = '';

  for (const movie of moviesArray.results) {
    html += await app.renderMovieCardHTML(movie.id);
  }

  return html;
};

app.getMoviesTodayTrends();
