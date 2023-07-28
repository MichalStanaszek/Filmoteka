import app from './js/global/app';

app.currentWebPage = 'library';

console.log("Current Web Page: " + app.currentWebPage);

import './js/library';
import './js/library-filters';
import './js/pagination-lib';
import './js/footer';
import './js/movie-window';

console.log("Current Library Movies Page: " + app.currentPage);
