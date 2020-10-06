import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Movie} />
      <Route path="/movieList" exact={true} component={MovieList} />
      <Route path="/movieDetail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
