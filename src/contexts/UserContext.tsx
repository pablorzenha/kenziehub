import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";
import TechProvider from "./TechContext";

interface iUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: String;
  name: string;
  techs: iTech[];
  updated_at: String;
  works: [];
}
interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface iUserProps {
  children: ReactNode;
}

export interface iData {
  email: string;
  password: string;
}

export interface iUserProviderData {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: any;
  backToLogin: () => void;
  goToRegister: () => void;
  goToHome: () => void;
  handleLogout: () => void;
  onSubmitRegister: (data: iData) => void;
  onSubmitLogin: (data: iData) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  loadUser: () => void;
  techs: iTech[] | undefined;
}

export const UserContext = createContext<iUserProviderData>(
  {} as iUserProviderData
);

function UserProvider({ children }: iUserProps) {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [techs, setTechs] = useState<iTech[]>();

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
        setTechs(data.techs);
      } catch (error) {
        window.localStorage.clear();
      }
    }
  }

  async function onSubmitLogin(data: iData) {
    setLoading(true);
    await api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);

        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado.");
        setLoading(false);
      });
  }

  function onSubmitRegister(data: iData) {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Conta criada com sucesso!", {
          autoClose: 1000,
        });
        backToLogin();
      })
      .catch((err) =>
        toast.error("Ops! Algo deu errado.", {
          autoClose: 1000,
        })
      );
  }

  function backToLogin() {
    navigate("/login");
  }
  function goToRegister() {
    navigate("/register");
  }
  function goToHome() {
    navigate("/");
  }
  function handleLogout() {
    window.localStorage.clear();
    setUser(null);
    setLoading(false);
    navigate("/");
  }
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        navigate,
        backToLogin,
        goToRegister,
        goToHome,
        handleLogout,
        onSubmitRegister,
        onSubmitLogin,
        modal,
        setModal,
        loadUser,
        techs,
      }}
    >
      <TechProvider>{children}</TechProvider>
    </UserContext.Provider>
  );
}
export default UserProvider;
