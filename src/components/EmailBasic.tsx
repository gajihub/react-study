import * as React from "react";
import {
  TextField,
  InputAdornment,
  Checkbox,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import { Search, StarOutline, Email } from "@mui/icons-material";
import styles from "@styles/components/EmailBasic.module.scss";

const EmailBasic = () => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
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
          <List className={styles.tableHead}>
            <ListItem>
              <Checkbox
                color="primary"
                inputProps={{
                  "aria-labelledby": "전체선택"
                }}
                checked={checked[0] && checked[1]}
                //   indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
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
          <ListItem>
            <div className={styles.mailBox}>
              <div className={styles.checkbox}>
                <Checkbox
                  color="primary"
                  inputProps={{
                    "aria-labelledby": "선택하기"
                  }}
                  checked={checked[0] && checked[1]}
                  onChange={handleChange2}
                />
              </div>
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
                <ListItemButton>보낸사람</ListItemButton>
              </div>
              <div className={styles.emailTitle}>
                <ListItemButton>[카테고리] 제목 [새창으로보기]</ListItemButton>
              </div>
              <div className={styles.date}>23.11.23</div>
            </div>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default EmailBasic;
