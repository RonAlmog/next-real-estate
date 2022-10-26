import React, { ReactNode } from "react";
import Link from "next/link";

interface IProps {
  main: ReactNode;
}

const Layout = ({ main }: IProps) => {
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
        </div>
      </nav>
      {main}
    </div>
  );
};

export default Layout;
