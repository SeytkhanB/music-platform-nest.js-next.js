import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
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
