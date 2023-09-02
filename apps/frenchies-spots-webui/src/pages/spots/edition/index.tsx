import React from "react";
import { SpotEditionForm } from "../../../components";
import { Container } from "@frenchies-spots/material";
import {
  CategoriesSpotAndTag,
  MutationInsertSpotArgs,
  SpotEntity,
  SpotInput,
  mutations,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";

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
    coordinates: [0, 0],
  },
};

const SpotInsertPage = () => {
  const [insertSpot, { data, loading, error }] = useMutation<
    { insertSpot: SpotEntity },
    MutationInsertSpotArgs
  >(mutations.insertSpot);

  const handleSubmit = (insertSpotInput: SpotInput) => {
    console.log("-------------------------");
    console.log({ insertSpotInput });
    console.log("-------------------------");
    insertSpot({ variables: { insertSpotInput } }).then((result) => {
      console.log("=======================");
      console.log(result);
      console.log("=======================");
    });
  };

  return (
    <Container size="md" p="md" sx={{ border: "1px solid" }}>
      <SpotEditionForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Container>
  );
};

export default SpotInsertPage;
