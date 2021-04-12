import { useSession, signIn, signOut } from "next-auth/client";
import { PageHeader, Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [session, loading] = useSession();
  const [handle, setHandle] = useState("");
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    // Access localStorage
    if (!handle.length) {
      const handleFromLS = localStorage.getItem("handle");
      setHandle(handleFromLS);
    }
  }

  useEffect(() => {
    if (session) {
      const email = session.user.email;
      fetch(`http://localhost:5000/users/emailId/${email}`).then((res) => {
        res.json().then((json) => {
          console.log("JSON", json);
          localStorage.setItem("handle", json.handle);
          localStorage.setItem("user_id", json.id);
        });
      });
    }
  }, [session]);
  if (session) {
    return (
      <PageHeader
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white",
        }}
        title={handle}
        subTitle="fluuid"
        extra={[
          <Button key="3">
            <Link href="/feed">feed</Link>
          </Button>,
          <Button key="2">
            <Link href="/profile">profile</Link>
          </Button>,
          <Button key="1" type="primary">
            <Link href="/talk">start talking</Link>
          </Button>,
        ]}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      />
    );
  }
  return (
    <>
      Not signed in
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Header;
