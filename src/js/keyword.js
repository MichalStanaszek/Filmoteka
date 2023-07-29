import app from './global/app';

app.apiTest('keyword.js');

app.getMoviesByKeyWord = async function (keyword) {
  app.currentKeyword = keyword;
  const keyword = await app.api.get('search/keyword?query=${keyword}');
  console.log(keyword);
  return keyword;
};

app.getMoviesByKeyWord();
