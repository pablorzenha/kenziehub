import styled from "styled-components";

export const Logo = styled.h1`
  color: #ff577f;
  animation: movimento 3s linear infinite;
  font-size: 50px;
  @keyframes movimento {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;
