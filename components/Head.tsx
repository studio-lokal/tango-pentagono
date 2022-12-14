import type { NextComponentType } from "next";
import Head from "next/head";

import config from "config";

const HeadComponent: NextComponentType = () => {
  return (
    <Head>
      <title>{config.title || "정보공개센터"}</title>
      <meta name="description" content={config.description} />

      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
  );
};

export default HeadComponent;
