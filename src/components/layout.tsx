import React, { ReactNode } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

interface IProps {
  main: ReactNode;
}

const Layout = ({ main }: IProps) => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800" style={{ height: "64px" }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <img
              src="/home-color.svg"
              alt="home house"
              className="inline w-6"
            />
          </Link>
          {session && (
            <>
              <Link href="/houses/add">Add House</Link>
              <button onClick={() => signOut()}>Logout</button>
            </>
          )}
          {!session && <Link href="/auth/signin">Login / Signup</Link>}
        </div>
      </nav>
      <main style={{ minHeight: "calc(100vh - 64px)" }}>{main}</main>
    </div>
  );
};

export default Layout;
