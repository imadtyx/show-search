import React, { useState } from "react"; // import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ff0000',
    },
  },
});


const API_URL = 'http://www.omdbapi.com/?apikey=ad929b7e';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    

    const searchMovies = async (title, pageNum) => {
        const response = await fetch(`${API_URL}&s=${title}&page=${pageNum}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }

    const handleChange = async (event, value) => {
        setPage(value);
        searchMovies(search, value);
    };

    return (
        <div className='app'>
            <h1>SHOWSEARCH</h1>

            <div className='search'>
                <input 
                    placeholder='Search Shows'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchMovies(search, 1)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(search, 1)}  
                />
            </div>

            {
                movies.length>0 ? (
                    <div className = "container">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found.</h2>
                    </div>
                )
            }

            <ThemeProvider theme={theme}>
                <Pagination count={100} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="secondary"/>  
            </ThemeProvider>
        </div>

        
    )
}

export default App;


