import React from "react";
import Head from "next/head";
import Particle from "../Components/Particle";
import styles from "../styles/Home.module.css";

function Main({ name }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Particle />
      <div>
        Sorrryyy {name}
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
