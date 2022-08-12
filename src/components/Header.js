import {
  AppBar,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
  Container,
} from "@mui/material";
// import { Container } from "@mui/system";
import React from "react";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => navigate("/")}
              className={classes.title}
            >
              Crypto Market
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                background: "aliceblue",
                color: "black",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
