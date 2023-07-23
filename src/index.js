import app from './js/global/app';

app.currentWebPage = 'home';

console.log("Current Web Page: " + app.currentWebPage);

import './js/gallery';
import './js/search-form';
import './js/pagination-gallery';
import './js/footer';
import './js/movie-window';

console.log("Current Home Movies Page: " + app.currentPage);
