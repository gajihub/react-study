import { ButtonGroup, Button } from "@mui/material";
import {
  StarBorderPurple500Sharp,
  AttachFileOutlined,
  DiscountOutlined
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setemail } from "../modules/email";
import styles from "@styles/components/Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);

  const emailWrite = () => {
    dispatch(setemail("write"));
  };

  return (
    <>
      <ButtonGroup
        className={styles.buttonTop}
        variant="contained"
        aria-label="Email header button">
        <Button onClick={emailWrite}>메일쓰기</Button>
        <Button>내게쓰기</Button>
      </ButtonGroup>
      <ul className={styles.topMenu}>
        <li>
          <span>0</span>안읽음
        </li>
        <li>
          <StarBorderPurple500Sharp />
          중요
        </li>
        <li>
          <AttachFileOutlined />
          첨부
        </li>
        <li>
          <DiscountOutlined />
          To
        </li>
      </ul>
    </>
  );
};

export default Header;
