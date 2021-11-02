import styled from "styled-components";
import { theme } from "../../themeVariables";

const Container = styled.div`
font-family: Roboto, sans-serif;
width: 450px;
height: 250px;

padding: 20px;
`;

const Image = styled.img`
`;

const Title = styled.h4`
font-size: 20px;
color: ${theme.main};
margin: 20px;
`;

const Text = styled.p`
font-size: 15px;
color: ${theme.secundary}
`;


export default function FeatureItem ({img, title, text}) {
    return (
        <Container>
            {img ? <Image src={img}/> : null}
            {title ? <Title>{title}</Title> : null}
            {text ? <Text>{text}</Text> : null}
        </Container>
    )
}