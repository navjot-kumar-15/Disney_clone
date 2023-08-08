import React from "react";
import styled from "styled-components";
import {
  Disney,
  Pixar,
  Marvel,
  National,
  StarWar,
  StarWarVideo,
  PixarVideo,
  MarvelVideo,
  NationalVideo,
  DisneyVideo,
} from "../assets/index";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={Disney} alt="" />
        <video autoPlay loop muted>
          <source src={DisneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={StarWar} alt="" />
        <video autoPlay loop muted>
          <source src={StarWarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Pixar} alt="" />
        <video autoPlay loop muted>
          <source src={PixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={National} alt="" />
        <video autoPlay loop muted>
          <source src={NationalVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Marvel} alt="" />
        <video autoPlay loop muted>
          <source src={MarvelVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 auto;
  overflow: hidden;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    & {
      padding: 6rem;
    }
  }
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  cursor: pointer;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    transform: scale(1.1);
    img {
      opacity: 0;
      visibility: hidden;
    }
    video {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Viewers;
