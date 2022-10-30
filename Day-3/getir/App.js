import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";


const theme = createTheme({
  lightColors: {},
  darkColors: {},
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}