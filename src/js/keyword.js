import app from './global/app';

app.apiTest('keyword.js');

app.getMoviesByKeyWord = async function (keyword) {
  const keyword = await app.api.get('search/keyword?query=monster');
  console.log(keyword);
  return keyword;
};

app.getMoviesByKeyWord();
