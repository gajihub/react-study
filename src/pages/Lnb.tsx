import React from "react";
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
  return (
    <>
      <div className={styles.lnb}>
        <Header />
        <List className={styles.mailList}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="전체메일" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxOutlined />
              </ListItemIcon>
              <ListItemText primary="받은메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SendOutlined />
              </ListItemIcon>
              <ListItemText primary="보낸메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InsertDriveFileOutlined />
              </ListItemIcon>
              <ListItemText primary="임시보관함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TextSnippetOutlined />
              </ListItemIcon>
              <ListItemText primary="내게쓴메일함" />
            </ListItemButton>
          </ListItem>
        </List>
        <Accordion className={styles.smartList}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            스마트메일함
          </AccordionSummary>
          <AccordionDetails>
            <ListItemButton>
              <ListItemIcon>
                <SubdirectoryArrowRightOutlined />
              </ListItemIcon>
              <ListItemText primary="청구결제" />
            </ListItemButton>
          </AccordionDetails>
        </Accordion>
        <List className={styles.etcList}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DoDisturbAltOutlined />
              </ListItemIcon>
              <ListItemText primary="스팸메일함" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
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
