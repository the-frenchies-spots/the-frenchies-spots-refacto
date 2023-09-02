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
import React from "react";
import { SwiperFrame } from "../../SwiperFrame/SwiperFrame";
import { LocationManager } from "@frenchies-spots/map";
import { tagsDataList } from "@frenchies-spots/utils";
import { CategoriesSpotAndTag } from "@frenchies-spots/gql";
import { SelectTag } from "../../InputCustom";

export const SpotEditionForm = () => {
  const form = useForm({ initialValues: {} });
  return (
    <SwiperForm>
      {/* SPOT TAG */}
      <SwiperSlide>
        <SwiperFrame>
          <Stack>
            <SelectTag list={tagsDataList} value={[]} />{" "}
          </Stack>
        </SwiperFrame>
      </SwiperSlide>
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
