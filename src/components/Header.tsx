import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import styles from "@styles/components/Header.module.scss";

const Header = () => {
  return (
    <>
      <ButtonGroup
        className={styles.buttonTop}
        variant="contained"
        aria-label="Email header button">
        <Button>메일쓰기</Button>
        <Button>내게쓰기</Button>
      </ButtonGroup>
      <ul className={styles.topMenu}>
        <li>
          <span>0</span>안읽음
        </li>
        <li>
          <StarBorderPurple500SharpIcon />
          중요
        </li>
        <li>
          <AttachFileOutlinedIcon />
          첨부
        </li>
        <li>
          <DiscountOutlinedIcon />
          To
        </li>
      </ul>
    </>
  );
};

export default Header;
