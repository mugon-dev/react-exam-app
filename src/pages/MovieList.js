import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieItem from '../components/MovieItem';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-content: space-between;
  margin: 10px;
`;
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  function deleteById(id) {
    fetch('http://10.100.102.2:8000/api/movie/' + id, {
      method: 'delete',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          alert('삭제되었습니다.');
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  }

  useEffect(() => {
    fetch('http://10.100.102.2:8000/api/movie', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);
  return (
    <GridContainer>
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
    </GridContainer>
  );
};

export default MovieList;
