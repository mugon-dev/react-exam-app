import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const CardStyle = styled.div`
  height: 500px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  box-shadow: 1px 1px 0px 0px rgb(54, 53, 53);
`;

const CardBodyStyle = styled.div`
  padding-left: 30px;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 300px;
`;

const ButtonStyle = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  background-color: red;
  box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
`;
const TextareaStyle = styled.textarea`
  width: 80%;
`;
const MovieItem = (props) => {
  const { id, title, rating, medium_cover_image, summary } = props.movie;
  const deleteById = props.deleteById;

  return (
    <CardStyle key={id}>
      <ImgStyle src={medium_cover_image} />
      <CardBodyStyle>
        <h4>{title}</h4>
        <p>평점 {rating}</p>
        <TextareaStyle>{summary}</TextareaStyle>
        <div>
          <ButtonStyle>
            <Link to={`/movieDetail/${id}`}>상세보기</Link>
          </ButtonStyle>
          <ButtonStyle onClick={() => deleteById(id)}>삭제</ButtonStyle>
        </div>
      </CardBodyStyle>
    </CardStyle>
  );
};

export default MovieItem;
