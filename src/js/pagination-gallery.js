import app from './global/app';

const paginationDiv = document.querySelector('div.pagination');

const firstBtn = document.getElementById('first-btn');
const lastBtn = document.getElementById('last-btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

function setButtons() {
  firstBtn.textContent = '1';
  firstBtn.value = '1';

  lastBtn.textContent = app.totalPages;
  lastBtn.value = app.totalPages;

  if (app.currentPage < 3) {
    btn1.textContent = '1';
    btn1.value = '1';

    btn2.textContent = '2';
    btn2.value = '2';

    btn3.textContent = '3';
    btn3.value = '3';

    btn4.textContent = '4';
    btn4.value = '4';

    btn5.textContent = '5';
    btn5.value = '5';
  } else if (app.currentPage > app.totalPages - 3) {
    btn1.textContent = app.totalPages - 4;
    btn1.value = app.totalPages - 4;

    btn2.textContent = app.totalPages - 3;
    btn2.value = app.totalPages - 3;

    btn3.textContent = app.totalPages - 2;
    btn3.value = app.totalPages - 2;

    btn4.textContent = app.totalPages - 1;
    btn4.value = app.totalPages - 1;

    btn5.textContent = app.totalPages;
    btn5.value = app.totalPages;
  } else {
    btn1.textContent = app.currentPage - 2;
    btn1.value = app.currentPage - 2;

    btn2.textContent = app.currentPage - 1;
    btn2.value = app.currentPage - 1;

    btn3.textContent = app.currentPage;
    btn3.value = app.currentPage;

    btn4.textContent = app.currentPage + 1;
    btn4.value = app.currentPage;

    btn5.textContent = app.currentPage + 2;
    btn5.value = app.currentPage + 2;
  }
}

function onPaginationDivClick(event) {
  const elementWhichWasClicked = event.target;
  if (elementWhichWasClicked.nodeName === 'BUTTON') {
    const buttonId = elementWhichWasClicked.id;

    if (buttonId === 'left-btn') {
      if (app.currentPage > 1) {
        app.currentPage = app.currentPage - 1;
      }
    } else if (buttonId === 'right-btn') {
      if (app.currentPage < app.totalPages - 1) {
        app.currentPage = app.currentPage + 1;
      }
    } else {
      app.currentPage = elementWhichWasClicked.value;
    }

    setButtons();

    if (app.currentKeyword) {
      app.getMoviesByKeyWord(app.currentKeyword);
    } else {
      app.getMoviesTodayTrends();
    }

    console.log("current page: " + app.currentPage);
  }
}

setButtons();

paginationDiv.addEventListener('click', onPaginationDivClick);

btn1.classList.add('active');
