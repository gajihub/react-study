import {
  OutlinedInput,
  FormControl,
  InputAdornment,
  Checkbox,
  TableSortLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Search } from "@mui/icons-material";
import styles from "@styles/pages/Container.module.scss";

const Container = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <FormControl sx={{ m: 1 }} variant="standard">
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                <TableRow hover sx={{ cursor: "pointer" }}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      inputProps={{
                        "aria-labelledby": ""
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    name
                  </TableCell>
                  <TableCell align="right">calories</TableCell>
                  <TableCell align="right">fat</TableCell>
                  <TableCell align="right">carbs</TableCell>
                  <TableCell align="right">protein</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Container;
