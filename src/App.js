import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import Gallary from "./components/Gallary";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <Title />
      <UploadForm />
      <Gallary />
    </Container>
  );
}

export default App;
