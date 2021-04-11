import { useSession, signIn, signOut } from "next-auth/client";
import { PageHeader, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";

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
          <Button key="3">feed</Button>,
          <Button key="2">profile</Button>,
          <Button key="1" type="primary">
            start talking
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
