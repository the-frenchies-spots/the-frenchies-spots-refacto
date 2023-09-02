import React from "react";
import { SpotEditionForm } from "../../../components";
import { Container } from "@frenchies-spots/material";
import { CategoriesSpotAndTag, SpotInput } from "@frenchies-spots/gql";

const initialValues: SpotInput = {
  name: "",
  description: "",
  address: "",
  category: CategoriesSpotAndTag.SPARE_TIME_SPOT,
  isCanPark: true,
  isHidden: false,
  region: "",
  pictures: [],
  tags: [],
  location: {
    type: "Point",
    coordinates: [],
  },
};

const SpotInsertPage = () => {
  const handleSubmit = (values: SpotInput) => {
    console.log("=======================");
    console.log(values);
    console.log("=======================");
  };

  return (
    <Container size="md" p="md" sx={{ border: "1px solid" }}>
      <SpotEditionForm initialValues={initialValues} onSubmit={handleSubmit} />
    </Container>
  );
};

export default SpotInsertPage;
