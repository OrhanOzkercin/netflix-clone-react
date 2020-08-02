import React from 'react';
import requests from './requests';

import Row from './Row';

import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Row
				title='Netlix Originals'
				fetchUrl={requests.fetchNetflixOriginals}
				isLarge
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Animation Movies' fetchUrl={requests.fetchAnimationMovies} />
			<Row title='History Movies' fetchUrl={requests.fetchHistoryMovies} />
			<Row title='Fantasy Movies' fetchUrl={requests.fetchFantasyMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='SiFi Movies' fetchUrl={requests.fetchSiFiMovies} />
		</div>
	);
}

export default App;
