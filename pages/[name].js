import React from "react";
import Head from "next/head";

function Main({name}) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div>{name} lazy Ahe...</div>
    </>
  );
}

export function getStaticPaths() {
  return { paths: [{ params: { name: "Hardik" } },{ params: { name: "Sharyu" } }], fallback: true };
}

export function getStaticProps({ params }) {
  const { name } = params;
  return { props: { name } };
}

export default Main;
