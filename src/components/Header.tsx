import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Email header button">
        <Button>메일쓰기</Button>
        <Button>내게쓰기</Button>
      </ButtonGroup>
    </>
  );
};

export default Header;
