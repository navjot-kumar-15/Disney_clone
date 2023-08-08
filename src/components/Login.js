import React from "react";
import styled from "styled-components";
import LoginImage from "../assets/images/login-background.jpg";
import LogoOne from "../assets/images/cta-logo-one.svg";
import LogoTwo from "../assets/images/cta-logo-two.png";
function Login() {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src={LogoOne} />
            <BtnContent>Get All There</BtnContent>
            <Description>
              get premier access to rays and the last dragon for an additional
              fee wit a disney<sup>+</sup> subscription on.as of 03/26/23 the
              price of the disney<sup>+</sup> and the disney bundle will
              increase by 1$.
            </Description>
            <CTALogoTwo src={LogoTwo} />
          </CTA>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${LoginImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  bottom: 0%;
  margin-bottom: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CTA = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  width: 50vmax;
`;
const CTALogoTwo = styled.img`
  width: 50vmax;
`;

const BtnContent = styled.a`
  width: 63%;
  padding: 1.2rem;
  font-size: 3vw;
  margin-bottom: 1vw;
  background-color: #0063e5;
  text-align: center;
  color: #f9f9f9;
  cursor: pointer;
  transition: transform 0.3s;
  letter-spacing: 1.4px;
  border-radius: 4px;

  &:hover {
    background-color: #0065f2;
    transform: scale(1.05);
  }
`;

const Description = styled.p`
  width: 63%;
  text-align: center;
  letter-spacing: 1.4px;
  line-height: 1.5;
  margin-bottom: 2vw;
  text-transform: capitalize;
  font-size: 1.2vw;
`;

export default Login;
