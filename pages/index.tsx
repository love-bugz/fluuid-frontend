import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card, Grid } from "antd";

export async function getServerSideProps(context) {
  const droplets = [
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
    {
      author: {
        handle: "chanceembrey",
      },
      title: "So I was taking a walk",
      closed_caption: "",
    },
  ];
  return {
    props: { droplets },
  };
}

export default function Home({ droplets }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluuid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>fluuid</h1>

        <p className={styles.description}>a new way to socialize</p>

        <section>
          {droplets.map((d) => {
            return (
              <Card key={d.author.handle + d.title}>
                <h3>{d.title}</h3>
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
