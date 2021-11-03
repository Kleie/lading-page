import styled from "styled-components";
import { theme } from "../../themeVariables";

import Button from "../Button/Button";

const BoxText = styled.div`
  padding: 45px;
`;
const NamePlan = styled.h3`
  margin-bottom: 10px;
  font-size: 30px;
`;
const NumberUsers = styled.p`
  font-size: 16px;
`;

const BoxPrice = styled.div``;
const Price = styled.h2`
  margin-bottom: 10px;
  font-size: 40px;
`;
const NumberMonths = styled.p`
  margin-bottom: 55px;
  font-size: 16px;
`;

export default function Plan({ namePlan, numberUsers, price, planSelected, active }) {
  const Container = styled.div`
    background: ${active ? "#fff" : "#0F1F4B"};
    width: 300px;
    height: 400px;
    border-radius: 30px;
    font-family: Roboto, sans-serif;
    margin: 0 30px;

    cursor: pointer;
  `;

  const Image = styled.img``;

  function sendPlanSelected() {
    planSelected(namePlan);
  }

  return (
    <Container onClick={sendPlanSelected}>
      <BoxText>
        <NamePlan>{namePlan}</NamePlan>
        <NumberUsers>{numberUsers}</NumberUsers>
      </BoxText>
      <Image />
      <BoxPrice>
        <Price>{price}</Price>
        <NumberMonths>per month</NumberMonths>
        <Button text="Order" />
      </BoxPrice>
    </Container>
  );
}
