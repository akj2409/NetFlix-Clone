import React, { useEffect, useState } from 'react'
import axios from './axios.js'

const baseURL = 'https://image.tmdb.org/t/p/w500'
function Row({ title, fetchurl }) {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios(fetchurl);
            setmovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchurl])

    console.log(movies)
    return (
        <div className='row'>
            <div className='title'>{title}</div>
            <div className='row-posters'>
                { movies && movies.map(movie => (
                    <img className="poster" src={`${baseURL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row