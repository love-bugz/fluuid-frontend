import Head from "next/head";
import Header from "../components/Header";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [session, loading] = useSession();
  const [userHandleText, setUserHandleText] = useState("");
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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("SESSION HERE", session.user.email);
            const response = await axios.post("http://localhost:5000/users/", {
              handle: userHandleText,
              emailId: session.user.email,
            });
            console.log(response.data);
          }}
        >
          <label>user handle</label>
          <input
            type="text"
            value={userHandleText}
            onChange={(e) => setUserHandleText(e.target.value)}
          />
        </form>
      </main>

      <footer className={styles.footer}>
        Halo Inc {new Date().getFullYear()}
      </footer>
    </div>
  );
}
