import './App.css';
import React from 'react'
import Poster from './poster.js';
import Row from './row.js';
import Card from './card.js';
function App() {
  return (
    <div className="App">
      <Poster fetchurl={'movie/top_rated?api_key=4e65d00f0a7450734431980039b3cf37&language=en-U'} />
      <Card fetchurl={'movie/top_rated?api_key=4e65d00f0a7450734431980039b3cf37&language=en-U'} />
      <Row title="Discovery" fetchurl={'discover/movie?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US'}/>
      <Row title="Trending Now" fetchurl={'discover/movie?api_key=4e65d00f0a7450734431980039b3cf37&with_genres=35'}/>
      <Row title="Upcoming" fetchurl={'movie/upcoming?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US'}/>
      <Row title="Now Playing" fetchurl={'movie/now_playing?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US'}/>
      <Row title="Tv Shows" fetchurl={'discover/tv?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US'}/>
      <Row title="Horror" fetchurl={'discover/movie?api_key=4e65d00f0a7450734431980039b3cf37&with_genres=27'}/>
    </div>
  );
}

export default App;
