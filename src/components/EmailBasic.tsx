import * as React from "react";
import {
  TextField,
  InputAdornment,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  Pagination
} from "@mui/material";
import { Search, StarOutline, Email } from "@mui/icons-material";
import styles from "@styles/components/EmailBasic.module.scss";
import emailData from "@data/EmailsData.json";

const EmailBasic = () => {
  const [checkedEmails, setCheckedEmails] = React.useState(
    new Array(emailData.length).fill(false)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const emailsPerPage = 10;

  //paging
  const emailpageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  //paging 에 따른 현재 페이지 데이터 가공
  const currentEmails = emailData.slice(
    (currentPage - 1) * emailsPerPage,
    currentPage * emailsPerPage
  );
  const currentPageChecked = checkedEmails.slice(
    (currentPage - 1) * emailsPerPage,
    currentPage * emailsPerPage
  );

  // 리스트 내 각 리스트 체크박스 함수 (현재 페이지의 이메일에 대해서만 작동)
  const emailCheckChange = (pageIndex: number) => {
    const globalIndex = (currentPage - 1) * emailsPerPage + pageIndex;
    const newChecked = [...checkedEmails];
    newChecked[globalIndex] = !newChecked[globalIndex];
    setCheckedEmails(newChecked);
  };

  // 전체 선택 체크박스 (현재 페이지의 이메일에 대해서만 작동)
  const checkboxToggleAll = () => {
    const isAllChecked = currentPageChecked.every(Boolean);
    const updatedChecked = new Array(emailsPerPage).fill(!isAllChecked);

    setCheckedEmails([
      ...checkedEmails.slice(0, (currentPage - 1) * emailsPerPage),
      ...updatedChecked,
      ...checkedEmails.slice(currentPage * emailsPerPage)
    ]);
  };
  return (
    <>
      <div className={styles.searchBox}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div>
        <div className={styles.toolbar}>
          <List className={styles.listHead}>
            <ListItem>
              <Checkbox
                color="primary"
                inputProps={{
                  "aria-labelledby": "전체선택"
                }}
                onChange={checkboxToggleAll}
                checked={currentPageChecked.every(Boolean)}
                indeterminate={
                  currentPageChecked.some(Boolean) &&
                  !currentPageChecked.every(Boolean)
                }
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
          {currentEmails.map((email, pageIndex) => (
            <ListItem key={email.id} className={styles.mailBox}>
              <Checkbox
                color="primary"
                checked={
                  checkedEmails[(currentPage - 1) * emailsPerPage + pageIndex]
                }
                onChange={() =>
                  emailCheckChange(
                    (currentPage - 1) * emailsPerPage + pageIndex
                  )
                }
              />
              <div className={styles.bookmark}>
                <ListItemButton>
                  <StarOutline />
                </ListItemButton>
              </div>
              <div className={styles.toggleRead}>
                <ListItemButton>
                  <Email />
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
          ))}
        </List>
      </div>

      <Pagination
        count={Math.ceil(emailData.length / emailsPerPage)}
        color="primary"
        page={currentPage}
        onChange={emailpageChange}
        className={styles.paging}
      />
    </>
  );
};

export default EmailBasic;
