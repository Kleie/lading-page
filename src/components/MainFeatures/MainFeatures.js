import styled from "styled-components";
import { theme } from "../../themeVariables";

import FeatureItem from "./FeatureItem";
import ComboFeature from "./ComboFeature";

import Monitoring from "../../assets/image/monitoring.svg";
import WidgetSystem from "../../assets/image/widgetSystem.svg";
import BestPerformance from "../../assets/image/bestPerformance.svg";
import Screen01 from "../../assets/image/screen-01.png";
import Screen02 from "../../assets/image/screen-02.png";
import Screen03 from "../../assets/image/screen-03.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;

  align-item: center;
  justify-content: center;

`;

const BoxTitle = styled.div`
  font-family: Roboto, sans-serif;
  padding: 0 40px;
  margin: 150px auto;
`;
const Title = styled.h2`
  font-size: 50px;
  color: ${theme.main};
  margin-bottom: 30px;
`;
const Text = styled.p`
  font-size: 20px;
  color: ${theme.fontColorDark};
`;

const FeatureItemBox = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export default function MainFeatures() {
  return (
    <Container>
      <BoxTitle>
        <Title>Main Features</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </Text>
      </BoxTitle>

      <FeatureItemBox>
        <FeatureItem
          img={Monitoring}
          title="Monitoring"
          text="Lorem ipsum dolor sit amet, consectetur adipis
          cing elit. Elementum nisi aliquet volutpat."
        />
        <FeatureItem
          img={WidgetSystem}
          title="Widget System"
          text="Sapien in etiam vitae nibh nunc mattis imperdiet
          sed nullam. Vitae et, tortor pulvinar risus pulvinar."
        />
        <FeatureItem
          img={BestPerformance}
          title="Best Performance"
          text="Lorem ipsum dolor sit amet, consectetur adipis
          cing elit. Elementum nisi aliquet volutpat."
        />
      </FeatureItemBox>

      <ComboFeature
        title="Automated Reports
        & Widget Alerts"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={Screen01}
      />

      <ComboFeature
        title="Fully customizable to address your needs "
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={Screen02}
        reverse
      />

      <ComboFeature
        title="Pre-built Dashboard Templates"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={Screen03}
      />
    </Container>
  );
}
