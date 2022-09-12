import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import axios from "axios";
import { parse } from "node-html-parser";

const Home: NextPage = ({ date, bbcHead, cnnHead }: any) => {
  React.useEffect(() => {
    console.log(bbcHead);
  }, [bbcHead]);
  return (
    <div className={styles.container}>
      <Head>
        <title> {new Date(Date.now()).toLocaleString()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>deployed at : {date}</h1>
      <h1>{bbcHead}</h1>
      <h1>{cnnHead}</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: bbcHTML } = await axios.get(`https://www.bbc.com/news`);

  const bbcRoot = parse(bbcHTML);
  const bbcHead = bbcRoot.querySelector(".gs-c-promo-heading__title")?.text;

  const { data: cnnHTML } = await axios.get(`https://www.bbc.com/future`);
  const cnnRoot = parse(cnnHTML);
  const cnnHead =
    cnnRoot.querySelector(".article-hero__title-text")?.text ?? "null";

  return {
    props: {
      bbcHead,
      cnnHead,
      date: new Date(Date.now()).toLocaleString(),
    },
  };
};

export default Home;
