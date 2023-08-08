import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Home } from "../components/index";
import {
  LogoImage,
  HomeIcon,
  Search,
  WatchList,
  Original,
  Movies,
  Series,
} from "../assets/index";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetail,
  setSignOutState,
} from "../features/User/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
 
          navigate("/home");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetail({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  return (
    <>
      <Nav>
        <Logo>
          <img src={LogoImage} alt="Disney+" />
        </Logo>
        {userName ? (
          <>
            <NavMenu>
              <a href="/home">
                <img src={HomeIcon} alt="Home" />
                <span>Home</span>
              </a>
              <a href="/search">
                <img src={Search} alt="Search" />
                <span>Search</span>
              </a>
              <a href="/watchlist">
                <img src={WatchList} alt="Watchlist" />
                <span>Watchlist</span>
              </a>
              <a href="/original">
                <img src={Original} alt="Original" />
                <span>original</span>
              </a>
              <a href="/movies">
                <img src={Movies} alt="Movies" />
                <span>Movies</span>
              </a>
              <a href="/series">
                <img src={Series} alt="Series" />
                <span>Series</span>
              </a>
            </NavMenu>
            <SignOut>
              <UserImg className="userImage" src={userPhoto} alt={userName} />
              <UserName>{userName}</UserName>
              <DropDown className="dropDown">
                <span onClick={handleAuth}>Sign Out</span>
              </DropDown>
            </SignOut>
          </>
        ) : (
          <>
            <Login onClick={handleAuth}>Login</Login>
          </>
        )}
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  inset: 0;
  background-color: #090b13;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 999;
  padding: 0rem 2rem;
`;
const Logo = styled.a`
  padding: 0;
  width: 9vw;
  padding-top: 0.5vw;
  max-width: 10vw;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  margin-right: auto;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  padding-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    img {
      height: 3.5vh;
      min-height: 4vh;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        left: 0%;
        bottom: -0.5rem;
        width: 0%;
        height: 0.3vh;
        background-color: rgb(249, 249, 249);
        transition: width 0.2s linear;
      }
    }
    &:hover span:before {
      width: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #fff;
  padding: 0.8rem 1.5rem;
  margin-top: 0.8rem;
  letter-spacing: 1.3px;
  cursor: pointer;
  font-size: 1.3vw;
  font-weight: 600;
  border-radius: 0.3rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;
const UserImg = styled.img`
  height: 100%;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  left: -60%;
  border-radius: 0.5rem;
  background-color: #141414;
  padding: 1rem;
  width: 6rem;
  height: auto;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  cursor: pointer;
  border: 0.01px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  span {
    font-size: 1rem;
  }
`;
const UserName = styled.p`
  position: absolute;
  width: 6rem;
  left: -1rem;
`;
const SignOut = styled.div`
  position: relative;
  top: -0.5rem;
  height: 60%;

  ${UserImg} {
    border-radius: 50%;
  }
  &:hover ${DropDown} {
    opacity: 1;
    visibility: visible;
  }
`;

export default Header;
