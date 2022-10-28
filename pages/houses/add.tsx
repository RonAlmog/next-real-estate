import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import HouseForm from "src/components/houseForm";

type Props = {};

const AddHouse = (props: Props) => {
  return <HouseForm />;
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
