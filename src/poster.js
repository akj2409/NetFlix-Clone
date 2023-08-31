import React, { useEffect, useState } from 'react'
import axios from './axios.js';

const baseURL = 'https://image.tmdb.org/t/p/w500'

function Poster({fetchurl}) {
    const [movie , setmovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios(fetchurl);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request ;
        }

        fetchData()
    },[fetchurl])

    console.log(movie);

    let sectionStyle = {
        height:"50vh",
        backgroundSize:"contain",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path} )`,
        backgroundPosition:"center center"
    }

    function truncate(str){
        return str && str.length>150 ? str.substr(0,150)+"..." : " Nothing is here" ;
    }

  return (
    <div className='big_poster' style={sectionStyle} >
        
        <h1 className='head_title'>{movie ? movie.original_title : "This is Title"}</h1>
        <p className='overview'>{movie ? truncate(movie.overview) : "This is Title"}</p>
        {/* { movie[0] && <img className='head_poster' src={`${baseURL}${movie[0].backdrop_path}`} alt='Big Poster'/>} */}
        <div className='buttons'>
        <button className='btn btn1'>Play</button>
        <button className='btn btn2'>Pause</button>
        </div>
        
        <div className='blur'></div>
    </div>
  )
}

export default Poster