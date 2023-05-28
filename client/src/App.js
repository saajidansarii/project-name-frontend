import "./App.css";
import { useState } from "react";
import LoginForm from "./Forms/LoginForm";
import Register from "./Forms/Register";

const App = () => {
  const [toggleonoff, settoggleonoff] = useState(true);

  const toggleShow = () => {
    // debugger;
    settoggleonoff(!toggleonoff);
  };
  return (
    <div className="App">
      {toggleonoff ? (
        <LoginForm triggerRegister={toggleShow} />
      ) : (
        <Register triggerLogin={toggleShow} />
      )}
    </div>
  );
};

export default App;
