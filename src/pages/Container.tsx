import React from "react";
import { useSelector } from "react-redux";
import EmailBasic from "@components/EmailBasic";
import styles from "@styles/pages/Container.module.scss";

const Container = () => {
  const emailSelected = useSelector((store) => store.emailReducer.seleted);

  return (
    <>
      <div className={styles.container}>
        {emailSelected === "basic" && <EmailBasic />}
      </div>
    </>
  );
};

export default Container;
