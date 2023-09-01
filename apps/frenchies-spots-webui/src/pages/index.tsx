import React from "react";
import Head from "next/head";
import { LocationManager } from "@frenchies-spots/map";
import { MultipleImagePicker } from "@frenchies-spots/material";
import { Box } from "@frenchies-spots/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>FRENCHIES SPOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>FRENCHIES SPOTS</main>
      <LocationManager />
      <MultipleImagePicker />
    </>
  );
}
