import app from './global/app';

app.getMoviesTodayTrends = async function()  { 
 const trendMovies = await app.api.get('trending/movie/day');
 return trendMovies; 
}

app.showMovieCards = function (moviesArray) {
  if (app.renderMovieCardHTML) {
    const moviesCardList = moviesArray.results.map(movie => {
      return app.renderMovieCardHTML(movie.id);
    });
    
    return moviesCardList.join('');
  } else {
    return '';
  }
};

app.renderMovieCardHTML = async function(movieId) {
  const movieObject = await app.api.get('movie/'+ movieId);
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
}


