import * as React from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  InputAdornment,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  Pagination
} from "@mui/material";
import {
  MailOutline,
  StarOutline,
  Email,
  Star,
  DraftsOutlined
} from "@mui/icons-material";
import {
  addImportantEmail,
  removeImportantEmail,
  addReadEmail,
  removeReadEmail
} from "@store/email";
import cx from "classnames";
import { useStoreSelector } from "@store/storeSelectors";
import styles from "@styles/components/EmailList.module.scss";
import emailData from "@data/EmailsData.json";

const EmailList = () => {
  const { selectImportant, selectEmailState } = useStoreSelector();

  const orderEmailArray = selectImportant;

  const [currentPage, setCurrentPage] = React.useState(1);
  const emailsPerPage = 10;
  const [emailImportance, setEmailImportance] = React.useState(
    new Array(orderEmailArray.length).fill(false)
  );
  const [emailRead, setemailRead] = React.useState(
    new Array(orderEmailArray.length).fill(false)
  );
  const dispatch = useDispatch();
  const findEmailIndexInState = (emailId: number) => {
    return selectEmailState.findIndex(
      (orderEmailArray: any) => orderEmailArray.id === emailId
    );
  };
  const findImportIndexInState = (emailId: number) => {
    return selectImportant.findIndex(
      (orderEmailArray: any) => orderEmailArray.id === emailId
    );
  };

  //paging
  const emailpageChange = (_event: any, page: number) => {
    setCurrentPage(page);
  };

  //paging 에 따른 현재 페이지 데이터 가공
  const currentEmails = orderEmailArray.slice(
    (currentPage - 1) * emailsPerPage,
    currentPage * emailsPerPage
  );

  //중요 표시
  const toggleImportant = (pageIndex: number) => {
    const globalIndex = (currentPage - 1) * emailsPerPage + pageIndex;

    const newEmailImportance = [...emailImportance];
    newEmailImportance[globalIndex] = !newEmailImportance[globalIndex];
    setEmailImportance(newEmailImportance);

    const email = orderEmailArray[globalIndex];

    if (newEmailImportance[globalIndex]) {
      dispatch(addImportantEmail(email));
    } else {
      dispatch(removeImportantEmail(email));
    }
  };

  //읽음, 안읽음 표시
  const toggleReadChk = (pageIndex: number) => {
    const globalIndex = (currentPage - 1) * emailsPerPage + pageIndex;

    const newEmailRead = [...emailRead];
    newEmailRead[globalIndex] = !newEmailRead[globalIndex];
    setemailRead(newEmailRead);

    const email = orderEmailArray[globalIndex];

    if (newEmailRead[globalIndex]) {
      dispatch(addReadEmail(email));
    } else {
      dispatch(removeReadEmail(email));
    }
  };

  return (
    <>
      <div>
        <div className={styles.title}>중요 메일</div>
        <div className={styles.toolbar}>
          <List className={styles.listHead}>
            <ListItem>
              <Checkbox
                color="primary"
                inputProps={{
                  "aria-labelledby": "전체선택"
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemButton>읽음</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>삭제</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>스팸차단</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>답장</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>전체답장</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>전달</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>이동</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>필터</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>안읽음 삭제 또는 1개 선택</ListItemButton>
            </ListItem>
          </List>
        </div>
        <List className={styles.mailList} disablePadding={true}>
          {currentEmails.length > 0 ? (
            currentEmails.map(
              (
                email: {
                  id: number;
                  sender: string | number | boolean | undefined;
                  title: string;
                  date: string | number;
                },
                pageIndex: number
              ) => {
                const emailSaved = findEmailIndexInState(email.id);
                const importSaved = findImportIndexInState(email.id);
                return (
                  <React.Fragment key={email.id + "-" + pageIndex}>
                    <ListItem
                      className={cx(
                        styles.mailBox,

                        emailSaved < 0 ? styles.eamilread : ""
                      )}>
                      <Checkbox color="primary" />
                      <div
                        className={styles.bookmark}
                        onClick={() => toggleImportant(pageIndex)}>
                        <ListItemButton>
                          {importSaved < 0 ? <StarOutline /> : <Star />}
                        </ListItemButton>
                      </div>
                      <div
                        className={styles.toggleRead}
                        onClick={() => toggleReadChk(pageIndex)}>
                        <ListItemButton>
                          {emailSaved < 0 ? <Email /> : <DraftsOutlined />}
                        </ListItemButton>
                      </div>
                      <div className={styles.sender}>
                        <ListItemButton>{email.sender}</ListItemButton>
                      </div>
                      <div className={styles.emailTitle}>
                        <ListItemButton>{email.title}</ListItemButton>
                      </div>
                      <div className={styles.date}>{email.date}</div>
                    </ListItem>
                  </React.Fragment>
                );
              }
            )
          ) : (
            <div className={styles.emptyEmail}>
              <div className={styles.emptyIcon}>
                <MailOutline />
              </div>
              <p>메일이 없습니다.</p>
            </div>
          )}
        </List>
      </div>

      {orderEmailArray.length > 10 ? (
        <Pagination
          count={Math.ceil(orderEmailArray.length / emailsPerPage)}
          color="primary"
          page={currentPage}
          onChange={emailpageChange}
          className={styles.paging}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EmailList;
