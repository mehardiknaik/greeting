import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Main = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      {" "}
      <Head>
        <title>{name || "Hardik"}</title>
      </Head>
      <div>{name || "Hardik"} lazy Ahe...</div>
    </>
  );
};

export default Main;
