import {
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST, SET_MOVIE_DETAIL
} from './constants';

const initialState = {
  items: {Search: [], totalResults:0},
  page: 1,
  item: {},
  isLoading: false,
  q: '',
};
function rootReducer(state = initialState, action) {
  if (action.type === SET_MOVIE_LIST) {
  	return {
  		...state,
  		items: action.payload, 
  		isLoading: false
  	};
  }

  if (action.type === SET_MOVIE_DETAIL) {
  	return {
  		...state,
  		item: action.payload, 
  		isLoading: false
  	};
  }

  if (action.type === START_FETCHING) {
  	return {
  		...state,
  		isLoading: true
  	};
  }

  if (action.type === SET_PAGE) {
  	return {
  		...state,
  		page: action.payload
  	};
  }

  return state;
}
export default rootReducer;