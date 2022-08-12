import React from "react";
import classes from "./CoinsTable.module.css";
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";

const CoinItem = ({ coins, profit }) => {
  const { symbol } = CryptoState();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/coins/${coins.id}`)}
      className={classes["coin-row"]}
    >
      <p>{coins.market_cap_rank}</p>
      <div className={classes["img-symbol"]}>
        <img src={coins.image} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <p>{coins.symbol.toUpperCase()}</p>
          <p style={{ fontSize: "14px" }}>{coins.name}</p>
        </div>
      </div>
      <p>
        {symbol}
        {coins.current_price.toLocaleString()}
      </p>
      <p
        className={classes["hide-mobile"]}
        style={{ color: profit > 0 ? "rgb(14, 203,129)" : "red" }}
      >
        {profit && "+"}
        {coins.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p>
        {symbol}
        {coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
