import React, { useEffect } from "react";
import styled from "styled-components";
import HomeBg from "../assets/images/home-background.png";
import {
  ImgSlider,
  Viewers,
  Recommend,
  NewDisney,
  Originals,
  Trending,
} from "./index";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/Movie/movieSlice";
import db from "../firebase";
import { selectUserName } from "../features/User/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            // console.log(recommends);
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName, recommends]);

  return (
    <>
      <HomeContainer>
        <ImgSlider />
        <Viewers />
        <Recommend />
        <NewDisney />
        <Originals />
        <Trending />
      </HomeContainer>
    </>
  );
}

export default Home;

const HomeContainer = styled.div`
  position: relative;
  transform: translateY(6rem);
  width: 100%;
  bottom: 0;
  height: auto;
  padding: 1rem 2rem;
  &:after {
    background: url(${HomeBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    & {
      height: auto;
    }
  }
`;
