import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import Gallary from "./components/Gallary";
import PhotoModal from "./components/PhotoModal";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <Title />
      <UploadForm />
      <Gallary />
      <PhotoModal />
    </Container>
  );
}

export default App;
