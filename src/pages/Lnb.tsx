import { useDispatch, useSelector } from "react-redux";
import { setemail } from "@store/email";
import Header from "@components/Header";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import {
  MailOutlineOutlined,
  InboxOutlined,
  SendOutlined,
  InsertDriveFileOutlined,
  TextSnippetOutlined,
  ExpandMore,
  SubdirectoryArrowRightOutlined,
  DoDisturbAltOutlined,
  DeleteOutlineOutlined
} from "@mui/icons-material";
import styles from "@styles/pages/Lnb.module.scss";

const Lnb = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: any) => state.selected);

  const emailAll = () => {
    dispatch(setemail("basic"));
  };
  return (
    <>
      <div className={styles.lnb}>
        <Header />
        <List className={styles.mailList}>
          <ListItem disablePadding>
            <ListItemButton onClick={emailAll}>
              <ListItemIcon className={styles.listIcon}>
                <MailOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="전체메일" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <InboxOutlined />
              </ListItemIcon>
              <ListItemText primary="받은메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <SendOutlined />
              </ListItemIcon>
              <ListItemText primary="보낸메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <InsertDriveFileOutlined />
              </ListItemIcon>
              <ListItemText primary="임시보관함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <TextSnippetOutlined />
              </ListItemIcon>
              <ListItemText primary="내게쓴메일함" />
            </ListItemButton>
          </ListItem>
        </List>
        <Accordion className={styles.smartList} defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            className={styles.smartSummary}>
            스마트메일함
          </AccordionSummary>
          <AccordionDetails className={styles.smartDetail}>
            <ListItemButton className={styles.listButton}>
              <ListItemIcon className={styles.listIcon}>
                <SubdirectoryArrowRightOutlined />
              </ListItemIcon>
              <ListItemText primary="청구결제" />
            </ListItemButton>
          </AccordionDetails>
        </Accordion>
        <List className={styles.etcList}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <DoDisturbAltOutlined />
              </ListItemIcon>
              <ListItemText primary="스팸메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <DeleteOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="휴지통" />
            </ListItemButton>
          </ListItem>
        </List>
        <List className={styles.settingList}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="환결설정" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="고객센터" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="메일용량" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="공지사항" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Lnb;
