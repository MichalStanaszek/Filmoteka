import app from './global/app';

app.apiTest('gallery.js');


app.getMoviesTodayTrends = async function()  { 
 const trendMovies = await app.api.get('trending/movie/day')
 console.log(trendMovies);
 return; 
  }
app.getMoviesTodayTrends();

/* //app.fetchGenres = async function () {
 //   const movieGenre = await app.api.get(`/genre/movie/list`);
//    movieGenre.searchParams.append('access_token', ACCESS_TOKEN);
  
   // const response = await fetch(movieGenre);
   // const data = await response.json();
  //  return data.genres;
 // }
 // app.fetchGenres ();

 // const NO_POSTER = `https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png`;

 // export function getGenres(arrayId, genres) {
  //  const arr = [];
  
 //   for (const value of genres) {
 //     if (arrayId === 'N/A' || arrayId.length === 0) {
 //       arr.push('Other');
 //       break;
//} else if (arrayId.includes(value.id)) {
  //      arr.push(value.name);
 //     }
 //   }
  
   // if (arr.length > 2) {
  //    arr.splice(2, arr.length - 2, 'Other');
  //  }
  
  //  return arr.join(', ');
 // }

 // export async function renderGallery(movieData)  {
  //  const genres = await fetchGenres();
   // return movieData
   //   .map(
   //     ({
    //      id,
  //        poster_path,
    //      title,
      //    release_date,
        //  genre_ids,
          //original_title,
//          vote_average,
  //        popularity,
    //      vote_count,
      //    overview,
    //    } = movieData) => {
     //     const poster = poster_path
       //     ? `https://image.tmdb.org/t/p/w500${poster_path}`
  //          : NO_POSTER;
    //      const releaseYear = release_date
      //      ? release_date.split('-')[0]
     //       : 'Unknown';
  //        const checkGenres = genre_ids
    //        ? getGenres(genre_ids, genres)
     //       : 'Unknown';
  //        return `
   //     <li class='movie_list_item' data-id="${app.MOVIE_CARDS_PARENT_ELEMENT_ID}" >
 //       <div href="" class='movie_list_link' id=${app.createMovieCardId(movieId)}>
   //     <div class="movie__cover--darkened"
  //        data-id="${id}"
    //      data-poster_path="${poster_path}"
     //     data-title="${title}"
   //       data-genre_ids="${checkGenres}"
  //        data-original_title="${original_title}"
  //        data-vote_average="${vote_average}"
   //       data-popularity="${popularity}"
   //       data-vote_count="${vote_count}"
   //       data-overview="${overview}"
    //      data-release_date="${release_date}"
  //      ></div>
    //      <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
    //      <div class='movie-info'>
     //         <p class='movie-title'>
     //           <b>${title.toUpperCase()}</b>
   //           </p>
     //         <p class='movie-date'>
    //            <span>${checkGenres} | ${releaseYear}</span>
     //         </p>
     //         <div class="movie__average movie__average--${getClassByRate(
    //            vote_average
     //         )}">${Number(vote_average).toFixed(1)}</div>
    //      </div>
   //       </div>
    //    </li>
    //    `;
    //    }
    //  )
  //    .join('');
 // }
//  export function getClassByRate(vote) {
 //   if (vote >= 8) {
 //     return 'green';
  //  } else if (vote > 6) {
 //     return 'orange';
 //   } else {
 //     return 'red';
 //   }
 // } */