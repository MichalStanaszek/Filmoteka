import api from './js/api';
import { Loading, Notify } from 'notiflix';

async function apiTest() {
  const res = await api.get('search/keyword?query=monster');

  console.log(res);
}

apiTest();
