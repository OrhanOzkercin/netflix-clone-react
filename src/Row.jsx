import React, { useState, useEffect } from 'react';

import axios from './axios';

import './Row.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLarge }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		};
		fetchData();
	}, [fetchUrl]);

	return (
		<div className='row'>
			<h2>{title}</h2>

			<div className='row__posters'>
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row__poster ${isLarge ? 'large' : ''}`}
						src={`${BASE_URL}${
							isLarge ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>

			{/* container>poster */}
		</div>
	);
};

export default Row;
