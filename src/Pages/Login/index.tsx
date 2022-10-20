import React, { useContext } from "react";
/* STYLES */
import { ContainerMain } from "../../Components/main/styles";
import {
  ButtonLogin,
  ButtonToRegister,
  ContainerLogin,
  FormLogin,
} from "./styles";
import logo from "../../Assets/Logo.png";
import Loader from "../../Components/Loading/loading";
/* HOOK FORM*/
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/* CONTEXT */
import {
  iData,
  iUserProviderData,
  UserContext,
} from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { user, loading, goToRegister, onSubmitLogin } =
    useContext<iUserProviderData>(UserContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(schema),
  });

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <ContainerMain>
      {loading ? (
        <Loader />
      ) : (
        <ContainerLogin>
          <img src={logo} alt="logo"></img>
          <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email?.message}
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password?.message}
            </div>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
            <p>Ainda não possui conta ?</p>
            <ButtonToRegister onClick={() => goToRegister()}>
              Cadastre-se
            </ButtonToRegister>
          </FormLogin>
        </ContainerLogin>
      )}
    </ContainerMain>
  );
}

export default Login;
