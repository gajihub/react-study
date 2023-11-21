import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Lnb from "./Lnb";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "@styles/pages/Home.module.scss";

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.wrap}>
          <Lnb />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
