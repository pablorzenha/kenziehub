import styled from "styled-components";

export const ContainerRegister = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    & {
      width: 280px;
    }
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 17px;
  gap: 15px;

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
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  input {
    box-sizing: border-box;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
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
      width: 100%;
      padding: 21px 11px;
      gap: 5px;
    }
    div {
      width: 100%;
    }
    div input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
export const ButtonToBack = styled.button`
  padding: 0px 16.2426px;
  width: 67.49px;
  height: 40.11px;
  background: #212529;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
  border: none;
`;

export const ButtonRegister = styled.button`
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 326px;
  height: 48px;
  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  color: #ffffff;
`;
