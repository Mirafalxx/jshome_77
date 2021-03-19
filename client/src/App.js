import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import AddTredForm from "./Containers/AddTredForm/AddTredForm";
import Treds from "./Containers/Treds/Treds";
import AppToollbar from './Components/UI/AppToollbar/AppToollbar'

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToollbar />
      </header>
      <main>
        <Container maxWidth='xl'>
          <Treds />
          <AddTredForm />
        </Container>
      </main>

    </>
  );
};

export default App;
