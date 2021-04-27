import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney);

  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <h3>New to Disney+</h3>
      <Content>
        <Carousel {...settings}>
          {movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={`/detail/` + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
        </Carousel>
      </Content>
    </Container>
  );
};
const Carousel = styled(Slider)`
  outline: none;
  margin-top: 20px;
  width: 100%;
  & > button {
    opacity: 0;
    height: 100%;
    width: 7vw;
    z-index: -1;
    &:hover {
      opacity: 1;
      transition: opacity 1.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      display: grid;
      place-items: center;
      max-width: 1000px;
      width: 100%;
      min-width: 1000px;
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -91px;
  }
  .slick-next {
    right: -91px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 0 0 26px;
  .recommended {
    margin: 5vh auto;
    z-index: 99;
    position: relative;
    top: 0;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -18px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  @media (max-width: 768px) {
    height: 25vh;
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
    object-fit: cover;
  }
  &:hover {
    z-index: 2;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default NewDisney;
