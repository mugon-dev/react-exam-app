import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Movie = () => {
  const inputStyle = styled.input`
    height: 45px;
    width: 100px;
  `;
  const history = useHistory();
  const [movie, setMovie] = useState({
    title: '',
    rating: '',
    medium_cover_image: '',
    summary: '',
  });
  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submitUser(e) {
    e.preventDefault();
    console.log(movie);

    fetch('http://10.100.102.2:8000/api/movie', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        if (res === 'ok') {
          alert('영화가 저장되었습니다.');
          history.push('/movieList');
        }
      });
  }
  function reset(e) {
    e.preventDefault();
    setMovie({
      title: '',
      rating: '',
      medium_cover_image: '',
    });
    console.log(movie);
  }

  return (
    <div>
      <form>
        <inputStyle
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="title 입력하세요"
        />
        <br />
        <input
          type="text"
          name="rating"
          value={movie.rating}
          onChange={inputHandle}
          placeholder="rating 입력하세요"
        />
        <br />
        <input
          type="text"
          name="medium_cover_image"
          value={movie.medium_cover_image}
          onChange={inputHandle}
          placeholder="medium_cover_image 입력하세요"
        />
        <br />
        <input
          type="text"
          name="summary"
          value={movie.summary}
          onChange={inputHandle}
          placeholder="summary 입력하세요"
        />
        <br />
        <button onClick={submitUser}>전송</button>
        <button onClick={reset}>리셋</button>
      </form>
    </div>
  );
};

export default Movie;
