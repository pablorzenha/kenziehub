import styled from "styled-components";

export const ContainerDashboard = styled.div`
  position: absolute;
  top: 145px;
  gap: 73px;
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      padding: 15px;
    }
  }
`;
export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DashboardUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
`;
export const DashboardManutence = styled.div`
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    & button {
      border: none;
      background: #212529;
      border-radius: 4px;
      width: 32px;
      color: #ffffff;
    }
  }
  ul {
    background: #212529;
    border-radius: 4px;
    padding: 22px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-height: 500px;
    overflow-y: auto;
  }

  li {
    background: #121214;
    border-radius: 4px;
    padding: 13px 22px;
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.21px;
      line-height: 22px;
      color: #ffffff;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
      text-align: right;
      color: #868e96;
    }
    button {
      background: none;
      border: none;
    }
  }
  li > div {
    display: flex;
    gap: 25px;
  }
`;

export const ButtonLogout = styled.button`
  padding: 0px 16.2426px;
  gap: 10.15px;
  width: 55.49px;
  height: 32px;
  background: #212529;
  border-radius: 4px;
  border: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
`;
