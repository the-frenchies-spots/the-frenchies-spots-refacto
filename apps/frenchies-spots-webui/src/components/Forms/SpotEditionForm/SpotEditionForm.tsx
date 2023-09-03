import React, { FormEventHandler } from "react";

import {
  Checkbox,
  LoadingOverlay,
  MultipleImagePicker,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from "@frenchies-spots/material";
import { useForm } from "@frenchies-spots/hooks";
import { SwiperFrame } from "../../SwiperFrame/SwiperFrame";
import { LocationManager, TLocationData } from "@frenchies-spots/map";
import { tagsDataList } from "@frenchies-spots/utils";
import { CategoriesSpotAndTag, SpotInput } from "@frenchies-spots/gql";
import { SelectTag } from "../../InputCustom";
import { SwiperForm } from "@/components/SwiperForm/SwiperForm";
import { SwiperSlide } from "swiper/react";

interface SpotEditionFormProps {
  initialValues: SpotInput;
  onSubmit: (values: SpotInput) => void;
  loading?: boolean;
}

export const SpotEditionForm = (props: SpotEditionFormProps) => {
  const { initialValues, onSubmit, loading = false } = props;

  const form = useForm<SpotInput>({
    initialValues,
    validate: {
      tags: (value: SpotInput["tags"]) => value?.length === 0,
      name: (value: SpotInput["name"]) => value?.length === 0,
      description: (value: SpotInput["description"]) => value?.length === 0,
      address: (value: SpotInput["address"]) => value?.length === 0,
      location: (value: SpotInput["location"]) =>
        value?.coordinates.length <= 1,
      region: (value: SpotInput["region"]) => value?.length === 0,
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(form.values);
  };

  const handleLocationChange = (newLocation: TLocationData) => {
    const { location, codeRegion } = newLocation;
    form.setValues((current) => ({
      ...current,
      region: codeRegion,
      address: location.value,
      location: {
        type: "Point",
        coordinates: [location.coordinates.lng, location.coordinates.lat],
      },
    }));
  };

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <SwiperForm onSubmit={handleSubmit}>
        {/* SPOT CATEGORY */}
        <SwiperSlide>
          <SwiperFrame prevLabel="">
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
          <SwiperFrame disabled={!form.isValid("tags")}>
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
          <SwiperFrame
            disabled={!(form.isValid("name") && form.isValid("description"))}
          >
            <Stack>
              <Text>Dis nous en plus sur ton spot !</Text>
              <TextInput
                label="Nom du spot"
                placeholder=""
                {...form.getInputProps("name")}
                error={form.errors.name && "Vous devez renseigner un nom"}
                required
              />
              <TextInput
                label="Description"
                placeholder=""
                {...form.getInputProps("description")}
                error={
                  form.errors.name && "Vous devez renseigner une description"
                }
                required
              />
              <Checkbox
                label="Est-ce que je peux me garer ?"
                checked={form.getInputProps("isCanPark").value}
                onChange={(event) =>
                  form
                    .getInputProps("isCanPark")
                    .onChange(event.currentTarget.checked)
                }
              />
              <MultipleImagePicker {...form.getInputProps("pictures")} />
            </Stack>
          </SwiperFrame>
        </SwiperSlide>
        {/* SPOT ADDRESS */}
        <SwiperSlide>
          <SwiperFrame
            disabled={
              !(
                form.isValid("address") &&
                form.isValid("location") &&
                form.isValid("region")
              )
            }
          >
            <LocationManager
              value={{
                location: {
                  value: form.values.address,
                  coordinates: {
                    lat: form.values.location?.coordinates[1],
                    lng: form.values.location?.coordinates[0],
                  },
                },
                codeRegion: form.values.region,
              }}
              onChange={handleLocationChange}
            />
          </SwiperFrame>
        </SwiperSlide>
        {/* PUBLIC || PRIVATE */}
        <SwiperSlide>
          <SwiperFrame nextLabel="Valider">
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
                    value: "private",
                  },
                ]}
              />
            </Stack>
          </SwiperFrame>
        </SwiperSlide>
        {/* PREVIEW */}
        <SwiperSlide>
          <SwiperFrame type="submit" nextLabel="Publier">
            <Stack>
              <Text>Preview</Text>
            </Stack>
          </SwiperFrame>
        </SwiperSlide>
      </SwiperForm>
    </>
  );
};
