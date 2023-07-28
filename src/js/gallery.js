import app from './global/app';

app.showMovieCards = function (moviesArray) {
  if (app.renderMovieCardHTML) {
    const moviesCardList = moviesArray.map(movie => {
      return app.renderMovieCardHTML(movie);
    });
    return moviesCardList.join('');
  } else {
    return '';
  }
};

const gallery = document.getElementById('gallery');
gallery.innerHTML = '';
const moviesCardList = app.showMovieCards(filteredMovies);
gallery.insertAdjacentHTML('beforeend', moviesCardList);





