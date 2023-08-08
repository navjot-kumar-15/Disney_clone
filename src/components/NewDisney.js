import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectNewDisney } from "../features/Movie/movieSlice";
import { useSelector } from "react-redux";

function NewDisney() {
  const newDisneys = useSelector(selectNewDisney);
  return (
    <Container>
      <h2>New to Disney+</h2>
      <Content>
        {newDisneys &&
          newDisneys.map((newDisney, id) => (
            <Wrap key={id}>
              <Link to={`/detail/${newDisney.id}`}>
                <img src={newDisney.cardImg} alt={newDisney.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

const Content = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  div {
    /* border: 1px solid yellow; */
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 10px 10px 33px 1px rgba(0, 0, 0, 0.63);
  border-radius: 0.6rem;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h3 {
    z-index: 99;
    position: absolute;
    bottom: 5%;
    left: 5%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export default NewDisney;
