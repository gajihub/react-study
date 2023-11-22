import React from "react";

export const mailList = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const MailListContext = React.createContext(mailList);
