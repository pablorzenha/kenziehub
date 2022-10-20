import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { iTechProviderData, TechContext } from "../contexts/TechContext";
import { iUserProviderData, UserContext } from "../contexts/UserContext";
import {
  BackgroundModal,
  BodyModal,
  ContainerModal,
  HeaderModal,
} from "./styles";

export interface iModalDataRegister {
  title: string;
  status: string;
}

function AddModal() {
  const { setModal } = useContext<iUserProviderData>(UserContext);
  const { OnSubmitTech } = useContext<iTechProviderData>(TechContext);

  const { register, handleSubmit } = useForm<iModalDataRegister>({});

  return (
    <BackgroundModal>
      <ContainerModal>
        <HeaderModal>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setModal(false)}>X</button>
        </HeaderModal>
        <BodyModal onSubmit={handleSubmit(OnSubmitTech)}>
          <label htmlFor="">Nome</label>
          <input type="text" {...register("title")} />
          <label htmlFor="">Selecionar Status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </BodyModal>
      </ContainerModal>
    </BackgroundModal>
  );
}

export default AddModal;
