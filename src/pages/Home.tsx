import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Header from "@components/Header";

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default Home;
