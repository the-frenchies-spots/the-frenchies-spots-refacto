import React from "react";
import Head from "next/head";
import { PageLayout } from "../components/Layout/PageLayout/PageLayout";
import { Typography, Stack, Container } from "@frenchies-spots/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>FRENCHIES SPOTS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main
        style={{
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <Container size="md">
          <Stack sx={(theme) => ({ color: theme.colors.blue })}>
            <Typography variant="h1">Entraide</Typography>
            <Typography variant="h1">Partage</Typography>
            <Typography variant="h1">Voyage</Typography>
          </Stack>
        </Container>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <PageLayout opacity={0.7}>{page}</PageLayout>;
};
