import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";

type Props = {};

const AddHouse = (props: Props) => {
  return <div>AddHouse</div>;
};

export default AddHouse;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }
  return {
    props: { session },
  };
};
