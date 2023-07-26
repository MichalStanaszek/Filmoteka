import app from './global/app';

app.apiTest('gallery.js');
app.getMoviesTodayTrends = async function()  { 
 const trendMovies = await app.api.get('trending/movie/day')
 console.log(trendMovies);
 return trendMovies; 
  }
app.getMoviesTodayTrends();

 