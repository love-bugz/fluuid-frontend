import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card } from "antd";
import { useSession, signIn, signOut } from "next-auth/client";
import Header from "../components/Header";
import { useEffect, useRef } from "react";

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/droplets`);
  const droplets = await response.json();
  return {
    props: { droplets },
  };
}

export default function Feed({ droplets }) {
  const audioRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fluuid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>fluuid</h1>

        <p className={styles.description}>a new way to socialize</p>

        <section>
          {droplets.map((d) => {
            const handleClick = () => {
              audioRef.current.play();
            };
            return (
              <Card key={d.id}>
                <h3>{d.title}</h3>
                <button onClick={handleClick}>Play</button>
                <audio ref={audioRef}>
                  <source src={d.audioTrack}></source>
                </audio>
                <h4>{d.createdAt}</h4>
              </Card>
            );
          })}
        </section>
      </main>

      <footer className={styles.footer}>
        Halo Inc {new Date().getFullYear()}
      </footer>
    </div>
  );
}
