import styled from "styled-components";
import { theme } from "../../themeVariables";




export default function ComboFeature({title, text, img, reverse}){
    const Container = styled.div`
        display:flex;
        justify-content: space-around;
        align-items: center;
    
        flex-direction: ${reverse ? "row-reverse" : "row"};
        margin: 0 33.600px;
    `;
    
    const BoxText = styled.div`
    font-family: Roboto, sans-serif;
    text-align: left;
    
    width: 420px;
    `;
    const Title = styled.h2`
    font-size: 45px;
    color: ${theme.main};
    
    margin-bottom: 20px;
    `;
    const Text = styled.p`
    font-size: 20px;
    color: ${theme.secundary};
    `;
    
    const BoxImg = styled.div``;
    const Img = styled.img``;

    return(
        <Container>
            <BoxText>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </BoxText>

            <BoxImg>
                <Img src={img}/>
            </BoxImg>
        </Container>
    )
}