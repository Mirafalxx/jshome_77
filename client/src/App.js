import { CssBaseline } from "@material-ui/core";
import React from "react";
import AddTredForm from "./Containers/AddTredForm/AddTredForm";
import Treds from "./Containers/Treds/Treds";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Treds />
      <AddTredForm />
    </>
  );
};

export default App;
