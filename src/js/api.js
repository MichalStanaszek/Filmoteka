import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db8473ed9221bf51f65f6231fec5dca6';

async function get(path) {
  const url = API_URL + path;
  const accept = 'application/json';

  try {
    return await axios({
      method: 'get',
      url: url,
      headers: {
        Accept: accept,
        Authorization: API_KEY,
      },
    });
  } catch (error) {
    if (error.response) {
      console.error(
        'Axios: Request made but the server responded with an error.'
      );
    } else if (error.request) {
      console.error(
        'Axios: Request made but no response is received from the server.'
      );
    } else {
      console.error('Axios: Error occured while setting up the request.');
      console.error(error);
    }

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          Accept: accept,
          Authorization: API_KEY,
        },
      });

      if (response.ok) {
        return {
          data: await response.json(),
        };
      } else {
        throw new Error('Network response was not OK');
      }
    } catch (error) {
      console.error(
        'Fetch: There has been a problem with your fetch operation:'
      );
      console.error(error);
    }
  }
}

export default {
  get,
};
