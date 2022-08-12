import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import classes from "./Banner.module.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Market
          </Typography>
          <Typography
            variant=""
            style={{
              color: "gold",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Digital Money, Your Future
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
