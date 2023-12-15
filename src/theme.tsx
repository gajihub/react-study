import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true
      },
      styleOverrides: {
        root: {
          "&:active": {
            boxShadow: "none"
          },
          "&:focus": {
            outline: "1px solid transparent",
            boxShadow: "none"
          },
          "&:focus-visible": {
            outline: "1px solid #000",
            boxShadow: "none"
          }
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&::before": {
            display: "none"
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent !important"
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: () => `
      body, html {
        font-size: 14px;
      }
      ul {
        list-style-type: none;
      }
      ul, li {
        margin:0;
        padding: 0;
      }
      :focus {
        outline: '2px solid #3f51b5';
      }
      `
    }
  }
});

export default theme;
