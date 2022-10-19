import './App.css';
import "./stylesheets/LoginContainer.css"
import { useState } from "react";
import SourceComponent from "./components/SourceComponent";
import TitleComponent from "./components/TitleComponent";
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";
import LinksComponent from "./components/LinksComponent";

function App() {

  const [user, setUser] = useState("")
  const [userPassword, setUserPassword] = useState("")

  return (
    <div className="App">
      <SourceComponent/>
      <TitleComponent/>
      <div className="login-container bg-dark p-4 rounded">
        <InputComponent
          setUser={setUser}
          setUserPassword={setUserPassword}
        />
        {
          userPassword === "252525" && user !== "" ? <ButtonComponent/> : null
        }
      </div>
      <LinksComponent/>
    </div>
  );
}

export default App;
