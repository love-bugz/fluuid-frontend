import Head from "next/head";
import Header from "../components/Header";
import { useSession } from "next-auth/client";
import { Button } from "antd";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function upload() {}

export default function Talk() {
  const [session, loading] = useSession();

  const [recording, setRecording] = useState(false);

  useEffect(() => {
    console.log("session: ", session);
    return function cleanup() {};
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fluuid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <RecordSection recording={recording} setRecording={setRecording} />
        <section
          style={{
            marginTop: 30,
          }}
        >
          <h4>
            <Link href="/birth">click here to link to use a link</Link>
          </h4>
          , or <button onClick={upload}>upload</button> a file
        </section>
      </main>

      <footer className={styles.footer}>
        Halo Inc {new Date().getFullYear()}
      </footer>
    </div>
  );
}

const RecordSection = ({ recording, setRecording }) => {
  return (
    <>
      <h2>press to record</h2>
      <h1
        style={{
          color: recording ? "red" : "gray",
          fontSize: recording ? 24 : 23,
        }}
      >
        recording
      </h1>
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
    </>
  );
};
