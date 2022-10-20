import React, { useContext } from "react";
/*       STYLE      */
import { ContainerMain } from "../../Components/main/styles";
import {
  ButtonRegister,
  ButtonToBack,
  ContainerRegister,
  FormRegister,
} from "./styled";
import logo from "../../Assets/Logo.png";
/*     HOOKFORM     */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/*       TOAST      */
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

interface iUserDataRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: string;
  course_module: string;
}

function Register() {
  const { user, backToLogin, onSubmitRegister } = useContext(UserContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório").min(8),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senha diferente"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserDataRegister>({
    resolver: yupResolver(schema),
  });

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <ContainerMain>
      <ContainerRegister>
        <div>
          <img src={logo} alt="logo"></img>
          <ButtonToBack onClick={() => backToLogin()}>Voltar</ButtonToBack>
        </div>
        <FormRegister onSubmit={handleSubmit(onSubmitRegister)}>
          <h2>Crie sua conta</h2>
          <h4>Rapido e grátis, vamos nessa</h4>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <input
              type="text"
              id="passwordConfirm"
              placeholder="Digite novamente sua nome"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Digite aqui sua bio"
              {...register("bio")}
            />
            {errors.bio?.message}
            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              id="contact"
              placeholder="Digite aqui seu contato"
              {...register("contact")}
            />
            {errors.contact?.message}
            <label htmlFor="course_module">Selecionar módulo</label>
            <input
              type="text"
              id="course_module"
              placeholder="Digite aqui seu módulo"
              {...register("course_module")}
            />
            {errors.course_module?.message}
          </div>
          <ButtonRegister type="submit">Cadastrar</ButtonRegister>
        </FormRegister>
      </ContainerRegister>
    </ContainerMain>
  );
}

export default Register;
