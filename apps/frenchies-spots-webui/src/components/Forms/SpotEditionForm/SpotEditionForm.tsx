import React, { FormEventHandler } from "react";

import {
  Checkbox,
  MultipleImagePicker,
  SegmentedControl,
  Stack,
  SwiperForm,
  SwiperSlide,
  Text,
  TextInput,
} from "@frenchies-spots/material";
import { useForm } from "@frenchies-spots/hooks";
import { SwiperFrame } from "../../SwiperFrame/SwiperFrame";
import { LocationManager } from "@frenchies-spots/map";
import { tagsDataList } from "@frenchies-spots/utils";
import { CategoriesSpotAndTag, SpotInput } from "@frenchies-spots/gql";
import { SelectTag } from "../../InputCustom";

interface SpotEditionFormProps {
  initialValues: SpotInput;
  onSubmit: (values: SpotInput) => void;
}

export const SpotEditionForm = (props: SpotEditionFormProps) => {
  const { initialValues, onSubmit } = props;

  const form = useForm<SpotInput>({
    initialValues,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(form.values);
  };

  return (
    <SwiperForm onSubmit={handleSubmit}>
      {/* SPOT CATEGORY */}
      <SwiperSlide>
        <SwiperFrame>
          <Stack>
            <Text>A quelle catégorie associerais-tu ton spot ?</Text>
            <SegmentedControl
              data={[
                {
                  label: "Ressources",
                  value: CategoriesSpotAndTag.RESOURCES_SPOT,
                },
                {
                  label: "Avanture",
                  value: CategoriesSpotAndTag.SPARE_TIME_SPOT,
                },
              ]}
              {...form.getInputProps("category")}
            />
          </Stack>
        </SwiperFrame>
      </SwiperSlide>
      {/* SPOT TAG */}
      <SwiperSlide>
        <SwiperFrame>
          <Stack>
            <SelectTag
              list={tagsDataList.filter(
                (tag) => tag.category === form.values.category
              )}
              {...form.getInputProps("tags")}
            />
          </Stack>
        </SwiperFrame>
      </SwiperSlide>
      {/* SPOT DESCRIPTION */}
      <SwiperSlide>
        <SwiperFrame>
          <Stack>
            <Text>Dis nous en plus sur ton spot !</Text>
            <TextInput label="Nom du spot" placeholder="" />
            <TextInput label="Description" placeholder="" />
            <Checkbox label="Est-ce que je peux me garer ?" />
            <MultipleImagePicker />
          </Stack>
        </SwiperFrame>
      </SwiperSlide>
      {/* SPOT ADDRESS */}
      <SwiperSlide>
        <SwiperFrame>
          <LocationManager />
        </SwiperFrame>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperFrame>
          <Stack>
            <Text>
              Dernier effort ! Quel statut préfères-tu pour ton spot ?
            </Text>

            <SegmentedControl
              data={[
                {
                  label: "Public",
                  value: "public",
                },
                {
                  label: "Privée",
                  value: "protected",
                },
              ]}
            />
          </Stack>
        </SwiperFrame>
      </SwiperSlide>
    </SwiperForm>
  );
};
