import { useState } from "react";
import { useSession } from "next-auth/client";
import Header from "../components/Header";

export default function NewDroplet() {
  const [audioTrack, setAudioTrack] = useState("");
  const [title, setTitle] = useState("");

  const [session, loading] = useSession();

  const isReply = false;

  return (
    <>
      <Header />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const createdByUserId = localStorage.getItem("user_id");
          const body = {
            createdByUserId,
            title,
            audioTrack,
            isReply,
          };
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/droplets`,
            {
              method: "post",
              body: JSON.stringify(body),
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(await response.json());
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>URL:</label>
        <input
          type="text"
          value={audioTrack}
          onChange={(e) => setAudioTrack(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
