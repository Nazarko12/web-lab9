import styled from "styled-components";
import {Menu, AutoComplete} from "antd";

export const ViewComponent = styled.section`
  width:100%
  max-width: 1360px;
  margin: 0 auto;
  background: #B0C4DE;
`;

export const AutoCompleteStyles = styled(AutoComplete)``;

export const MenuStyles = styled(Menu)`
  display: flex;
  width: auto;
  margin-top: 0px;
  color: black;
    background: aqua;
  li:nth-child(8) {
    right: -600px;
  }
`;

export const MenuItemStyles = styled(Menu.Item)``;
