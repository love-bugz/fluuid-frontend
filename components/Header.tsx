import { useSession, signIn, signOut } from "next-auth/client";
import { PageHeader, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Link from "next/link";

const Header = () => {
  const [session, loading] = useSession();
  const handle = session?.user?.handle;
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
            <Link href="/">feed</Link>
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
