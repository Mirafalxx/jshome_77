import React from "react";
import AddTredForm from "./Containers/AddTredForm/AddTredForm";
import Treds from "./Containers/Treds/Treds";

const App = () => {
  return (
    <div className="App">
      <Treds />
      <AddTredForm />
    </div>
  );
};

export default App;
