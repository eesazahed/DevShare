import Head from "next/head";
import Meta from "./Meta";
import Favicons from "./Favicons";
import { NextPage } from "next";

interface Props {
  title: string;
}

const CHead: NextPage<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} | DevShare`}</title>
        <Meta />
        <Favicons />
      </Head>
    </>
  );
};

export default CHead;
