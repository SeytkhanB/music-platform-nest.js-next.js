import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Music platform"}</title>
        <meta
          name="description"
          content={`Music platform for fun! - ${description}`}
        />
        <meta name="keywords" content="index follow" />
        <meta name="keywords" content={keywords || "music, tracks, artists"} />
      </Head>
      <Navbar />
      <Container
        style={{
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;
