import { ButtonGroup, Button } from "@mui/material";
import {
  StarBorderPurple500Sharp,
  AttachFileOutlined,
  DiscountOutlined
} from "@mui/icons-material";
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
