import axios from './axios.js';
// https://api.themoviedb.org/3/discover/movie?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US

const {data} = await axios.get('discover/movie?api_key=4e65d00f0a7450734431980039b3cf37&language=en-US')

console.log(data);

export default data ;






