import styled from "styled-components";
import { theme } from "../../themeVariables"


export default function Button({dark, pink, text}) {
  const Dark = styled.button`
  margin: 0 5px;
  padding: 10px 40px;
  border: 1px solid transparent;
  border-radius: 99px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${theme.borderButtonDark};
  }
  background-color: transparent;

  font-family: "Roboto", sans-serif;
  color: ${theme.fontColorDark};
`;

  const Pink = styled.button`
  background: ${theme.backgroundButtonPink};
  border: none;
  border-radius: 99px;
  padding: 10px 40px;
  width: 200px;
  height: 40px;
  
  cursor: pointer;


  font-family: "Roboto", sans-serif;
  color: ${theme.fontColorPink};
  `;


  return (
    <>
    {dark ? <Dark>{text}</Dark> : <Pink>{text}</Pink>}
    </>
  )
}
