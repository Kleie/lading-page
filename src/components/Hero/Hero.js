import styled from "styled-components";
import { theme } from "../../themeVariables";

import Button from "../Button/Button";
import Header from "../Header/Header";

import mainScreen from "../../assets/image/mainScreen.png";

const HeroContainer = styled.div``;

const BorderPink = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  background: ${theme.backgroundButtonPink};
`;
const MainTitle = styled.div`
  background-color: ${theme.main};
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 73%, 0 98%);
`;

const Box = styled.div`
  font-family: Roboto, sans-serif;
  text-align: left;
  width: 500px;

  position: absolute;
  top: 250px;
  left: 200px;
`;
const Title = styled.h1`
  font-size: 45px;
  color: ${theme.fontColorPink};

  margin-bottom: 10px;
`;
const Info = styled.p`
  font-size: 16px;
  color: ${theme.secondary};

  margin-bottom: 40px;
`;

const BoxImg = styled.div`
  position: absolute;
  right: 0px;
  top: 110px;

  z-index: 100;
`;
const MonitorBusiness = styled.img``;

export default function Hero() {
  return (
    <HeroContainer>
      <BorderPink>
        <MainTitle>
          <Header />
          <Box>
            <Title>Monitor your business on real-time dashboard</Title>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.{" "}
            </Info>
            <Button pink text="Try for Free" />
          </Box>
        </MainTitle>
      </BorderPink>

      <BoxImg>
        <MonitorBusiness src={mainScreen} />
      </BoxImg>
    </HeroContainer>
  );
}
