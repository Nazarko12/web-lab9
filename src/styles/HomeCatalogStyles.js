import styled from "styled-components";
import {Button} from "antd";

export const CatalogContainer = styled.section`
  max-width: 455px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCards = styled.section`
  background-color: white;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export const TitleStyles = styled.h1`
  font-family: "OpenSans-Light";
  font-size: 17px;
  letter-spacing: 7px;
  text-transform: uppercase;
  padding-top: 75px;
  padding-bottom: 50px;
  color: #020243;
  text-align: center;
`;

export const ButtonStyles = styled(Button)`
  background: black;
  border: 1px solid black;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 19px;
  color: #fff;
  letter-spacing: 5px;
  text-align: center;
  width: 200px;
  height: 50px;

  margin-top: 86px;
  margin-bottom: 100px;
  :hover {
    border: 1px solid black;
    color: black;
  }
`;
