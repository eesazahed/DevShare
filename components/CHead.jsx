import Head from "next/head";
import Meta from "./Meta";
import Favicons from "./Favicons";

const CHead = ({title}) => {
    return (
        <>
            <Head>
                <title>{`${title} | DevShare`}</title>
                <Meta />
                <Favicons/>
            </Head>
        </>
    );
}

export default CHead;