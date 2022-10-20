import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ContainerHeader, Linkd } from "./styles";

function Header() {
  const { goToHome } = useContext(UserContext);

  return (
    <>
      <ContainerHeader>
        <h1 onClick={() => goToHome()}>KenzieHub</h1>
        <nav>
          {localStorage.getItem("@TOKEN") ? (
            <Linkd to="/dashboard">Dashboard</Linkd>
          ) : (
            <>
              <Linkd to="/login">Login</Linkd>
              <Linkd to="/register">Register</Linkd>
            </>
          )}
        </nav>
      </ContainerHeader>

      <Outlet />
    </>
  );
}

export default Header;
