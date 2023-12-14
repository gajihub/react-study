import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true
      },
      styleOverrides: {
        root: {
          "&:active": {
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
