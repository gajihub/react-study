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
          },
          "&:focus": {
            outline: "none"
          },
          "&:hover": {
            backgroundColor: "transparent"
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
    MuiCssBaseline: {
      styleOverrides: () => `
        ul {
          list-style-type: none;
        }
        ul, li {
          margin:0;
          padding: 0;
        }
      `
    }
  }
});

export default theme;
