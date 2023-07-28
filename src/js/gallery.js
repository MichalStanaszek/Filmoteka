import app from './global/app';

app.apiTest('gallery.js');


app.showMovieCards = function (moviesArray) {
  if (app.renderMovieCardHTML) {
    const moviesCardList = moviesArray.results.map(movie => {
      return app.renderMovieCardHTML(movie.id);
    });

    console.log(moviesCardList);
    return moviesCardList.join('');
  } else {
    return '';
  }
};

app.getMoviesTodayTrends().then(movies => {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  gallery.insertAdjacentHTML(
    'afterbegin',
    app.showMovieCards(movies)
  );
});
