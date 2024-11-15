import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Autenticado from "./Autenticado";
import "./App.css";
import NoAutenticado from "./NoAutenticado";

function App() {
  const { user } = useContext(AuthContext);

  return user ? <Autenticado /> : <NoAutenticado />;
}

export default App;
