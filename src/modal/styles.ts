import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  height: calc(100vh - 80px);
  position: absolute;
  z-index: 2;
`;
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  & div {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  background: #343b41;
  border-radius: 4px 4px 0px 0px;
  padding: 12px 20px;
  align-items: center;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  button {
    background: none;
    border: none;
    color: #868e96;
  }
`;

export const BodyModal = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  background: #212529;
  gap: 22px;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  input,
  select {
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: #f8f9fa;
  }
  button {
    width: 324px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
`;
