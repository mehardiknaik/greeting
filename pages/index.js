import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(name);
  };
  return (
    <>
      <input
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter the Name"
      />
      <button onClick={handleClick}>Open</button>
      {data.map((e) => (
        <div key={e}>
          <Link href={`/${e}`}>{e}</Link>
        </div>
      ))}
    </>
  );
}

const data = ["Hardik"];
