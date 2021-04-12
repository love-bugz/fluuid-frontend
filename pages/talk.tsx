import Head from "next/head";
import Header from "../components/Header";
import { useSession } from "next-auth/client";
import { Button } from "antd";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Talk() {
  const [session, loading] = useSession();

  const [recording, setRecording] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fluuid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h2>press to record</h2>
        <h1>{recording ? "RECORDING" : "-"}</h1>
        <Button
          onTouchStart={() => {
            setRecording(true);
          }}
          onTouchEnd={() => {
            setRecording(false);
          }}
        >
          PRESS
        </Button>
      </main>

      <footer className={styles.footer}>
        Halo Inc {new Date().getFullYear()}
      </footer>
    </div>
  );
}
