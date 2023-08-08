import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { PlayBlack, PlayWhite, Plus } from "../assets/index";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  console.log(detailData);

  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src={PlayBlack} alt="Play" />
            <span>Play</span>
          </Player>
          <Player>
            <img src={PlayWhite} alt="Play" />
            <span>Trailer</span>
          </Player>
          <AddList>
            <span>
              <i className="ri-add-line"></i>
            </span>
            <span>
              <i className="ri-group-fill"></i>
            </span>
          </AddList>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    @media screen and (max-width: 768px) {
      width: cover;
    }
  }
`;

const ImageTitle = styled.div`
  width: 25rem;
  height: 25rem;
  overflow: hidden;
  margin-top: 6rem;
  margin-left: 1rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin-top: -3rem;
  }
  @media screen and (max-width: 962px) {
    & {
      width: 50vw;
      height: 50vw;
    }
  }
`;

const ContentMeta = styled.div`
  position: relative;
  padding: 1rem;
`;
const Controls = styled.div`
  position: absolute;
  top: -8rem;
  display: flex;
  gap: 1rem;
`;

const Player = styled.button`
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.5s;
  border: 0.2px solid black;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #514d4d;
    color: white;
    transition: background-color 0.5s;
    border: 0.2px solid white;
  }

  span {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 962px) {
    & {
      width: 20vmin;
      height: 10vh;
    }
  }
  &:hover {
    background-color: #c2c2c2;
  }
  &:nth-child(2):hover {
    background-color: #383737;
  }
`;

const AddList = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 2rem;
  span {
    width: 4rem;
    height: 4rem;
    background-color: #302c2c;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    i {
      font-size: 2.1rem;
    }
  }
`;

const SubTitle = styled.h1`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  margin-top: -2rem;
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  /* text-align: justify; */
  padding: 0.5rem;
  margin-bottom: 0.7rem;
  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
`;
const Description = styled.p`
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  font-weight: 300;
`;

export default Details;
