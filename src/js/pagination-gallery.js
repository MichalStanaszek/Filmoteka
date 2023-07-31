import app from './global/app';

const paginationDiv = document.querySelector('div.pagination');
paginationDiv.addEventListener("click", onPaginationDivClick);

function onPaginationDivClick(event) {
    const elementWhichWasClicked = event.target;
    if (elementWhichWasClicked.nodeName === "BUTTON") {
        const buttonId = elementWhichWasClicked.id
        //
        if (buttonId === "left_arrow_btn") {
            console.log("Poprzednia strona")
            app.currentPage = app.currentPage - 1;
            
        } else if (buttonId === "right_arrow_btn") {
            console.log("Kolejna strona")
            app.currentPage = app.currentPage + 1;

        } else {
                app.currentPage = elementWhichWasClicked.value;
        }
        // sprawdz czy jest w app.currentKeyWord jakas wartosc, jesli tak -> wywołanie fukncji app.getMoviesByKeyWord (app.currentKeyWord)
            // jesli nie -> wywołanie funkcji app.getMoviesTodayTrends
        if (app.currentKeyword) {
            app.getMoviesByKeyWord(app.currentKeyword);
        } else {
            app.getMoviesTodayTrends();
        }

    }}