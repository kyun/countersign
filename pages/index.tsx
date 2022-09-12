import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import axios from "axios";

const Home: NextPage = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title> {new Date(Date.now()).toLocaleString()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data.info.seed}</h1>
      <h2>{data.results[0].picture.large}</h2>
      <Image
        loader={({ src }) => src}
        src={data.results[0].picture.large}
        alt="picture"
        width={256}
        height={256}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get("https://randomuser.me/api/");
  return {
    props: {
      data,
    },
  };
};

export default Home;
