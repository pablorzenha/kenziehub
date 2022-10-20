import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  background: rgba(0, 0, 0, 0.67);

  nav {
    display: flex;
    gap: 15px;
  }
  h1 {
    cursor: pointer;
  }
`;

export const Linkd = styled(Link)`
  text-decoration-line: none;
  color: #fff;
`;
