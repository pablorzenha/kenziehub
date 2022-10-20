import { createContext, ReactNode, useContext } from "react";
import React from "react";
import { api } from "../Services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { iModalDataRegister } from "../modal";

interface iTechProps {
  children: ReactNode;
}
export interface iTechProviderData {
  OnSubmitTech: (data: iModalDataRegister) => void;
  handleDelete: (event: any) => void;
}

export const TechContext = createContext<iTechProviderData>(
  {} as iTechProviderData
);

function TechProvider({ children }: iTechProps) {
  const { setModal, loadUser } = useContext(UserContext);

  function handleDelete(event: any) {
    api
      .delete(`/users/techs/${event.target.id}`)
      .then((response) => {
        toast.success("Tecnologia deletada.", {
          autoClose: 1000,
        });
        loadUser();
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado.", {
          autoClose: 1000,
        });
        console.log(err);
      });
  }

  function OnSubmitTech(data: iModalDataRegister) {
    api
      .post("/users/techs", data)
      .then((response) => {
        toast.success("Tecnologia adicionada.", {
          autoClose: 1000,
        });
        setModal(false);
        loadUser();
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado.", {
          autoClose: 1000,
        });
        console.log(err);
      });
  }

  return (
    <TechContext.Provider value={{ OnSubmitTech, handleDelete }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
