import app from './global/app';

// app.getMoviesByKeyWord = async function (keyword) {
//   app.currentKeyword = keyword;
//   const keyword = await app.api.get('search/keyword?query=${keyword}');
//   console.log(keyword);
//   return keyword;
// };

// app.getMoviesByKeyWord();


//   app.currentKeyword = keyword;

//   const keywordData = await app.api.get(`search/keyword?query=${keyword}&page${app.currentPage}`);

//   if (keywordData.total_results > 0) {
//     return keywordData;
//   } else {
//     app.onSearchFailed();
//     throw new Error('No movies found');
//   }
// };

// app.getMoviesByKeyWord('keyword');
