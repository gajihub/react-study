import React from "react";
import { useSelector } from "react-redux";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import { SyncAlt } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "@styles/components/EmailWrite.module.scss";

const EmailWrite = () => {
  const mailType = useSelector((store: any) => store.emailReducer.wirteType);
  return (
    <>
      <div className={styles.writeWrap}>
        {mailType === "write" && (
          <>
            <div className={styles.title}>메일쓰기</div>
            <ul className={styles.topButton}>
              <li>
                <Button variant="text">보내기</Button>
              </li>
              <li>
                <Button variant="text">미리보기</Button>
              </li>
              <li>
                <Button variant="text">
                  <SyncAlt />
                  내게쓰기
                </Button>
              </li>
            </ul>
            <div className={styles.mailInfo}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple" />
              </FormControl>
            </div>
          </>
        )}

        {mailType === "tome" && (
          <>
            <div className={styles.title}>내게쓰기</div>
            <ul className={styles.topButton}>
              <li>
                <Button variant="text">보내기</Button>
              </li>
              <li>
                <Button variant="text">미리보기</Button>
              </li>
              <li>
                <Button variant="text">
                  <SyncAlt />
                  내게쓰기
                </Button>
              </li>
            </ul>
            <div className={styles.mailInfo}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple" />
              </FormControl>
            </div>
          </>
        )}

        <div className={styles.editorBox}>
          <ReactQuill />
        </div>
      </div>
    </>
  );
};

export default EmailWrite;
