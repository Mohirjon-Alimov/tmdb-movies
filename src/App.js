import './App.css';
import {useAuth} from './hook/useAuth'
// import { Routes, Route} from 'react';
import { Private } from './private';
import { Public } from './public';
// import {useState} from 'react'

function App() {
  // https://image.tmdb.org/t/p/original/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png logo
  // https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  // poster_path
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const {token} = useAuth(); 



  return (
    
    <>
     {
      token ? <Private /> : <Public />
     }
    </>
  );
}

export default App;
