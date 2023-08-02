import app from './global/app';

const paginationDiv = document.querySelector('div.pagination');

function onPaginationDivClick(event) {
  const elementWhichWasClicked = event.target;
  if (elementWhichWasClicked.nodeName === 'BUTTON') {
    const buttonId = elementWhichWasClicked.id;

    let currentPage = app.getPage();
    const currentKeyword = app.getKeyword();

    if (buttonId === 'left-btn') {
      if (currentPage > 1) {
        currentPage -= 1;
      }
    } else if (buttonId === 'right-btn') {
      if (currentPage < app.getTotalPages() - 1) {
        currentPage += 1;
      }
    } else {
      currentPage = elementWhichWasClicked.value;
    }

    if (currentKeyword) {
      app.getMoviesByKeyWord(currentKeyword, currentPage);
    } else {
      if (app.getWebPage() === 'library') {
        app.showMoviesFromLocalStorage(app.LOCAL_STORAGE_WATCH_KEY);
      } else {
        app.getMoviesTodayTrends(currentPage);
      }
    }
  }
}

paginationDiv.addEventListener('click', onPaginationDivClick);
