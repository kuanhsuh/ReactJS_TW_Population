import { FETCH_CITY, SEARCH_CITY } from '../actions/index';
import _ from 'lodash';

let initialState = {
  searchText: '',
  city: []
};

export default function(state = initialState, action){
  switch(action.type) {
  case FETCH_CITY:
    return Object.assign({}, state, {
      city: action.payload.data.result.records.slice(1,371)
    });
  case SEARCH_CITY:
    return Object.assign({}, state, {
        searchText: action.district
    });
  default:
    return state;
  }
}


// Sorting Feature Can't Figure it out
// case SORT_POPULATION:
//   console.log("sorting")
//   let sortedState = state
//   _.map(state.city, (city)=>city.people_total = +city.people_total)
//   sortedState.city.sort((a,b) => a.people_total - b.people_total)
//   return sortedState
