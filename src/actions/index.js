import axios from 'axios';

const ROOT_URL = `http://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000605-021`;

export const FETCH_CITY = 'FETCH_CITY'
export const SEARCH_CITY = 'SEARCH_CITY'
export const SORT_POPULATION = 'SORT_POPULATION'

export const fetchCity = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: FETCH_CITY,
    payload: request
  };
};

export const searchCity = district => ({type: SEARCH_CITY, district });
export const sortPopulation = () => ({type: SORT_POPULATION});
