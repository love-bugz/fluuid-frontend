import Head from "next/head";
import Header from "../../components/Header";
import { useSession, signOut } from "next-auth/client";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Onboarding() {
  const [session, _loading] = useSession();
  const router = useRouter();
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
            const body = {
              handle: userHandleText,
              emailId: router.query.id,
            };
            const response = await fetch("http://localhost:5000/users/", {
              method: "post",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });
            console.log(await response.json());
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
