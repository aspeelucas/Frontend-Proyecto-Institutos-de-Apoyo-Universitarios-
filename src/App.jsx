import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./pages/routes";
import { createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b263b",
      dark: "#072329",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f7f7f7",
      paper: "#0b263b",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.87)",
    },
    action: {
      disabledBackground: '#173247',
      disabled: 'rgba(219, 222, 236, 0.8)',

    }
  },
});

function App() {
  return (
    

<ThemeProvider theme={theme}>
      <CssBaseline>
        <ToastContainer/>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>

    
  );
}
export default App;
