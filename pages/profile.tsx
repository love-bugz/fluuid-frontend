import Head from "next/head";
import Header from "../components/Header";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/Home.module.css";

export default function Profile() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluuid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {session && (
          <>
            <h1>{session?.user?.handle}</h1>
            <button onClick={() => signOut()}>Log out</button>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        Halo Inc {new Date().getFullYear()}
      </footer>
    </div>
  );
}
