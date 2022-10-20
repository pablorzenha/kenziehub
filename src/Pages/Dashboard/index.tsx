import React, { useContext } from "react";
import { ContainerMain } from "../../Components/main/styles";
import Trash from "../../Assets/delete.png";
import logo from "../../Assets/Logo.png";
import {
  ButtonLogout,
  ContainerDashboard,
  DashboardHeader,
  DashboardManutence,
  DashboardUser,
} from "./styles";

import { iUserProviderData, UserContext } from "../../contexts/UserContext";
import AddModal from "../../modal";
import { iTechProviderData, TechContext } from "../../contexts/TechContext";

function Dashboard() {
  const { user, handleLogout, modal, setModal, techs } =
    useContext<iUserProviderData>(UserContext);
  const { handleDelete } = useContext<iTechProviderData>(TechContext);

  return (
    <ContainerMain>
      <ContainerDashboard>
        <DashboardHeader>
          <img src={logo} alt="" />
          <ButtonLogout onClick={() => handleLogout()}>Sair</ButtonLogout>
        </DashboardHeader>
        <DashboardUser>
          <h2>{user?.name}</h2>
          <p>{user?.course_module}</p>
        </DashboardUser>
        <DashboardManutence>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setModal(true)}>+</button>
          </div>
          <ul>
            {techs?.map((tech) => (
              <li key={tech.title}>
                <h2>{tech.title}</h2>
                <div>
                  <p>{tech.status}</p>
                  <button id={tech.id} onClick={(event) => handleDelete(event)}>
                    <img id={tech.id} src={Trash} alt="Deletar"></img>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </DashboardManutence>
      </ContainerDashboard>
      {modal && <AddModal />}
    </ContainerMain>
  );
}

export default Dashboard;
