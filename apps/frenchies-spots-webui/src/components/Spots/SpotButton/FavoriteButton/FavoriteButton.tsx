import React, { MouseEventHandler, useEffect, useState } from "react";

import { IconHeart, IconHeartFilled } from "@frenchies-spots/icon";

import SpotButton from "../SpotButton";
import type { SpotButtonProps } from "../SpotButton";
import { useMutation } from "@apollo/client";
import {
  FavoriteEntity,
  MutationToggleFavoriteArgs,
  SpotEntity,
  ToggleFavoriteResponse,
  mutations,
} from "@frenchies-spots/gql";

type TFavorite = { favoriteId: string | undefined; spotId: string };

interface FavoriteButtonProps extends Omit<SpotButtonProps, "children"> {
  favorite: TFavorite;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { favorite: initFavorite, ...other } = props;

  const [favorite, setFavorite] = useState<TFavorite>(initFavorite);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  const [toggleFavorite, { loading }] = useMutation<
    { toggleFavorite: ToggleFavoriteResponse },
    MutationToggleFavoriteArgs
  >(mutations.toggleFavorite);

  const handleFavoriteClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    const { favoriteId, spotId } = favorite;
    console.log({ favoriteInput: { favoriteId, spotId } });
    toggleFavorite({
      variables: { favoriteInput: { favoriteId, spotId } },
    }).then((result) => {
      const id = result?.data?.toggleFavorite?.favoriteId || undefined;
      console.log("----------------------------");
      console.log({ favoriteId });
      console.log("----------------------------");

      setFavorite((prev) => ({ ...prev, favoriteId: id }));
    });
  };

  return (
    <SpotButton {...other} onClick={handleFavoriteClick} loading={loading}>
      {favorite?.favoriteId ? <IconHeartFilled /> : <IconHeart />}
    </SpotButton>
  );
};

export default FavoriteButton;
