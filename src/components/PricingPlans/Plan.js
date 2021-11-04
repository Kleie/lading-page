import styled from "styled-components";
import { theme } from "../../themeVariables";

import Button from "../Button/Button";

export default function Plan({ namePlan, numberUsers, price, dark }) {

  const Container = styled.div`
    background: ${dark ? "#0F1F4B" : "#fff"};
    width: 300px;
    height: 400px;
    border-radius: 30px;
    font-family: Roboto, sans-serif;
    
    cursor: pointer;
    
    margin: 0 30px;
    padding: 0 45px;
  `;

  const BoxText = styled.div`
  margin: 45px 0;
  `;
  const NamePlan = styled.h3`
    color: ${dark ? "#fff" : theme.main};
    margin-bottom: 10px;
    font-size: 40px;
  `;
  const NumberUsers = styled.p`
    color: ${theme.secondary};
    font-size: 16px;
    padding-bottom: 30px;
    border-bottom: 2px solid ${dark ? "#2A407C" :"#D3D9E9"};;
  `;

  const Image = styled.img``;

  const BoxPrice = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: -25px;
  `;
  const Price = styled.h2`
    color: ${dark ? "#fff" : theme.main};;
    margin-bottom: 10px;
    font-size: 50px;
  `;
  const NumberMonths = styled.p`
    color: ${theme.secondary};
    margin-bottom: 40px;
    font-size: 16px;
  `;

  return (
    <Container>
      <BoxText>
        <NamePlan>{namePlan}</NamePlan>
        <NumberUsers>{numberUsers}</NumberUsers>
      </BoxText>
      <Image />
      <BoxPrice>
        <Price>{price}</Price>
        <NumberMonths>per month</NumberMonths>
        <Button text="Order" dark={dark} />
      </BoxPrice>
    </Container>
  );
}
