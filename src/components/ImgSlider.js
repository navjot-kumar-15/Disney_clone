import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import {
  SliderBadag,
  SliderBadging,
  SliderScale,
  SliderScales,
} from "../assets/index";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Carasoul {...settings}>
        <Wrap>
          <a href="">
            <img src={SliderBadging} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="">
            <img src={SliderScale} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="">
            <img src={SliderBadag} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="">
            <img src={SliderScales} alt="" />
          </a>
        </Wrap>
      </Carasoul>
    </>
  );
}

const Carasoul = styled(Slider)`
  width: 100%;
  height: 40vh;
  overflow: hidden;
  position: relative;
  /* margin-top: 8rem; */
  margin-bottom: 2rem;
  background: transparent;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  & .slick-prev {
    margin-left: 3rem;
  }
  & .slick-next {
    margin-right: 3rem;
  }
  & .slick-next,
  & .slick-prev {
    opacity: 0;
    height: 100%;
    width: 10rem;
    z-index: 99;
    transition: opacity 0.5s;
  }

  &:hover button {
    opacity: 1;
  }
  ul {
    position: absolute;
    bottom: 0%;
  }

  ul li button {
    &:before {
      font-size: 1vmax;
      color: rgb(150, 158, 171);
      opacity: 1;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial !important;
  }

  @media screen and (max-width: 768px) {
    & .slick-prev {
      margin-left: -1rem;
    }
    & .slick-next {
      margin-right: -1rem;
    }
  }
  @media screen and (max-width: 600px) {
    ul li button {
      &:before {
        margin-top: -2rem;
      }
    }
    & .slick-prev {
      margin-left: -2rem;
    }
    & .slick-next {
      margin-right: -2rem;
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 60vh;
  z-index: -1;
  overflow: hidden;

  a {
    display: block;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    height: 100%;

    img {
      border-radius: 0.5rem !important;
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      height: 40vh;
    }
  }
`;
export default ImgSlider;
