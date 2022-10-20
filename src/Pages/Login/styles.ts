import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  img {
    width: 144.06px;
    height: 19.97px;
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 22px;
  gap: 22px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  input {
    box-sizing: border-box;

    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
  }
  label {
    display: flex;
    color: #f8f9fa;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 310px;
      padding: 21px 11px;
    }
    div {
      width: 100%;
    }
    input {
      width: 100%;
      box-sizing: border-box;
    }
    button {
      width: 100%;
    }
  }
`;
export const ButtonLogin = styled.button`
  box-sizing: border-box;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 324px;
  height: 48px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
`;

export const ButtonToRegister = styled.button`
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #f8f9fa;

  width: 329.93px;
  height: 48px;
`;
