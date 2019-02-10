import {
    API_URL, API_KEY, API_KEY_QUERY_STRING,
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST, SET_MOVIE_DETAIL
} from './constants';

export function getMovieList(payload) {
	scroll(0,0);
	return dispatch => {
		dispatch({ type: START_FETCHING });
		dispatch({ type: SET_PAGE, payload: payload.page });
        return fetch(`${ API_URL }?${ API_KEY_QUERY_STRING }=${ API_KEY }&s=${ payload.q }&page=${payload.page}`)
            .then(result=>result.json())
            .then(items=> {
            	dispatch({ type: SET_MOVIE_LIST, payload: items });
            });
  };
};
export function getMovieDetail(payload) {
	scroll(0,0);
	return dispatch => {
		dispatch({ type: START_FETCHING });
        return fetch(`${ API_URL }?${ API_KEY_QUERY_STRING }=${ API_KEY }&i=${ payload }&plot=full&r=json`) 
            .then(result=>result.json())
            .then(item=> {
            	dispatch({ type: SET_MOVIE_DETAIL, payload: item });
            });
  };
};