import React from "react";
import { SpotEditionForm } from "../../../components";
import { Container } from "@frenchies-spots/material";

const SpotInsertPage = () => {
  return (
    <Container size="md" p="md" sx={{ border: "1px solid" }}>
      <SpotEditionForm />
    </Container>
  );
};

export default SpotInsertPage;
