const API_KEY = 'e6c690d3d0c876d4ff798c47535c3cdf';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
	fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10751`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16`,
	fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=14`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749`,
	fetchSiFiMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=878`,
};
export default requests;
