import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {data.map((e) => (
        <div><Link key={e} href={`/${e}`}>{e}</Link></div>
      ))}
    </>
  );
}

const data = ["Hardik", "Sharyu"];
