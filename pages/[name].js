import React from "react";
import Head from "next/head";
import Particle from "../Components/Particle";

function Main({ name }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Particle />
      <div>
        {name}{" "}
        {name?.toLowerCase() === "hardik"
          ? "lazy"
          : name?.toLowerCase() === "uvya" || name?.toLowerCase() === "sharyu"
          ? "pagal"
          : "hushar"}{" "}
        Ahe...
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { name: "Hardik" } }, { params: { name: "Sharyu" } }],
    fallback: 'blocking',
  };
}

export function getStaticProps({ params }) {
  const { name } = params;
  return { props: { name } };
}

export default Main;
