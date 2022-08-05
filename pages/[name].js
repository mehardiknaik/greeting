import React from "react";
import Head from "next/head";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { name } = params;

  try {
    return { props: { name } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}

export default function Main({ name }) {
  return     <>
  {" "}
  <Head>
    <title>{name}</title>
  </Head>
  <div>{name} lazy Ahe...</div>
</>
}
