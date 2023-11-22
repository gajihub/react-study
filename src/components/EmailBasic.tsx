import * as React from "react";
import {
  TextField,
  InputAdornment,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";
import {
  Search,
  StarOutline,
  Email,
  DraftsOutlined
} from "@mui/icons-material";
import styles from "@styles/components/EmailBasic.module.scss";

const EmailBasic = () => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
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
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            className={styles.mailListTable}>
            <TableBody>
              <TableRow hover sx={{ cursor: "pointer" }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-labelledby": ""
                    }}
                    checked={checked[0] && checked[1]}
                    //   indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                  colSpan={5}>
                  <ul className={styles.tableHead}>
                    <li>읽음</li>
                    <li>삭제</li>
                    <li>스팸차단</li>
                    <li>답장</li>
                    <li>전체답장</li>
                    <li>전달</li>
                    <li>이동</li>
                    <li>필터</li>
                    <li>안읽음 삭제 또는 1개 선택</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding="none">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-labelledby": ""
                    }}
                    checked={checked[0]}
                    onChange={handleChange2}
                  />
                </TableCell>
                <TableCell>
                  <StarOutline />
                </TableCell>
                <TableCell>
                  <Email />
                </TableCell>
                <TableCell>보낸사람</TableCell>
                <TableCell>[카테고리] 제목 [새창으로보기]</TableCell>
                <TableCell>받은시간</TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding="none">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-labelledby": ""
                    }}
                  />
                </TableCell>
                <TableCell>
                  <StarOutline />
                </TableCell>
                <TableCell>
                  <Email />
                </TableCell>
                <TableCell>보낸사람</TableCell>
                <TableCell>[카테고리] 제목 [새창으로보기]</TableCell>
                <TableCell>받은시간</TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding="none">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-labelledby": ""
                    }}
                    checked={checked[1]}
                    onChange={handleChange3}
                  />
                </TableCell>
                <TableCell>
                  <StarOutline />
                </TableCell>
                <TableCell>
                  <DraftsOutlined />
                </TableCell>
                <TableCell>보낸사람</TableCell>
                <TableCell>[카테고리] 제목 [새창으로보기]</TableCell>
                <TableCell>받은시간</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default EmailBasic;
