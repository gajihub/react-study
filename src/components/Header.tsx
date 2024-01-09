import {
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from "@mui/material";
import {
  StarBorderPurple500Sharp,
  AttachFileOutlined,
  DiscountOutlined
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setemail } from "@store/email";
import styles from "@styles/components/Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();

  const emailWrite = () => {
    dispatch(setemail("write", "write"));
  };

  const emailTome = () => {
    dispatch(setemail("write", "tome"));
  };

  return (
    <>
      <ButtonGroup
        className={styles.buttonTop}
        variant="contained"
        aria-label="Email header button">
        <Button onClick={emailWrite}>메일쓰기</Button>
        <Button onClick={emailTome}>내게쓰기</Button>
      </ButtonGroup>
      <List className={styles.topMenu} disablePadding={true}>
        <ListItem>
          <ListItemButton className={styles.listBtn}>
            <span>0</span>안읽음
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton className={styles.listBtn}>
            <ListItemIcon className={styles.listIcon}>
              <StarBorderPurple500Sharp />
            </ListItemIcon>
            중요
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton className={styles.listBtn}>
            <ListItemIcon className={styles.listIcon}>
              <AttachFileOutlined />
            </ListItemIcon>
            첨부
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton className={styles.listBtn}>
            <ListItemIcon className={styles.listIcon}>
              <DiscountOutlined />
            </ListItemIcon>
            To
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default Header;
