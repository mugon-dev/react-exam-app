import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const MovieDetail = (props) => {
  const history = useHistory();
  const id = props.match.params.id;
  const [movie, setMovie] = useState({
    title: '',
    rating: '',
    medium_cover_image: '',
    summary: '',
  });
  useEffect(() => {
    fetch('http://10.100.102.2:8000/api/movie/' + id, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, []);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function update(e) {
    e.preventDefault();
    console.log(movie);
    fetch('http://10.100.102.2:8000/api/movie/' + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          alert('영화가 수정되었습니다.');
          history.push('/movieList');
        }
      });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          name="title"
          placeholder={movie.title}
        />
        <br />
        <input
          type="text"
          name="rating"
          placeholder={movie.rating}
          onChange={inputHandle}
        />
        <br />
        <input
          type="text"
          name="medium_cover_image"
          placeholder={movie.medium_cover_image}
          onChange={inputHandle}
        />
        <br />
        <input
          type="text"
          name="summary"
          placeholder={movie.summary}
          onChange={inputHandle}
        />
        <br />
        <button onClick={update}>수정</button>
        <button>
          <Link to="movieList">취소</Link>
        </button>
      </form>
    </div>
  );
};

export default MovieDetail;
