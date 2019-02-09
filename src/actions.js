export function getMovieList(payload) {
	scroll(0,0);
	return dispatch => {
		dispatch({ type: "START_FETCHING"});
		dispatch({ type: "SET_PAGE", payload: payload.page });
        return fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&s=${ payload.q }&page=${payload.page}`)
            .then(result=>result.json())
            .then(items=> {
            	dispatch({ type: "SET_MOVIE_LIST", payload: items });
            });
  };
};
export function getMovieDetail(payload) {
	scroll(0,0);
	return dispatch => {
		dispatch({ type: "START_FETCHING"});
        return fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&i=${ payload }&plot=full&r=json`) 
            .then(result=>result.json())
            .then(item=> {
            	dispatch({ type: "SET_MOVIE_DETAIL", payload: item });
            });
  };
};
export function startFetching() {
	return { type: "START_FETCHING"}
}