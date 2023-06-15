import React,{useEffect} from "react";
import Head from "next/head";
import Particle from "../Components/Particle";
import styles from "../styles/Home.module.css";
import TiltWidget from "../Components/TiltWidget";

function Main({ name }) {

useEffect(()=>{
if('vibrate' in navigator)
navigator.vibrate([10,0,10])
},[])

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`This Website created by HarDik for ${name}`} />
      </Head>
      <div className={styles.main} >
        {/* <div className={styles.wrapper}>
          <div className={styles.greet}>happy independence day</div>
          <div className={styles.name}>{name.toLowerCase()}</div>
        </div> */}
        <TiltWidget name={name}/>
  <Particle/>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { name: "Hardik" } }, { params: { name: "Sharyu" } }],
    fallback: "blocking",
  };
}

export function getStaticProps({ params }) {
  const { name } = params;
  return { props: { name,key: name } };
}

export default Main;
