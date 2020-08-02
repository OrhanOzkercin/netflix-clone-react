const requests = {
	fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
	fetchHistoryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
	fetchAnimationMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
	fetchFantasyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
	fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
	fetchSiFiMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
};
export default requests;
