import styled from "styled-components";
import { theme } from "../../themeVariables";

import Plan from "./Plan";

const BorderPink = styled.div`
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  background-color: ${theme.backgroundButtonPink};
`;

const Container = styled.div`
  background-color: ${theme.main};
  margin-top: 100px;
  height: 100vh;
  clip-path: polygon(0 27%, 100% 2%, 100% 100%, 0% 100%);
`;

const BoxText = styled.div`
  font-family: Roboto, sans-serif;
  padding-top: 200px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #fff;
`;
const Text = styled.p`
  color: ${theme.secondary};

  margin-bottom: 50px;
`;

const BoxPlan = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  margin: 50px;
`;

export default function PricingPlans() {
  return (
    <BorderPink>
      <Container>
        <BoxText>
          <Title>Pricing Plans</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.{" "}
          </Text>
        </BoxText>
        <BoxPlan>
          <Plan
            namePlan="Starter"
            numberUsers="up to 3 users"
            price="$29"
            dark
          />
          <Plan namePlan="Standard" numberUsers="up to 20 users" price="$99" />
          <Plan
            namePlan="Premium"
            numberUsers="up to 200 users"
            price="$299"
            dark
          />
        </BoxPlan>
      </Container>
    </BorderPink>
  );
}
