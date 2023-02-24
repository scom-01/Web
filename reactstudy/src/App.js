import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState(0);
  const [convert, setConvert] = useState();
  const [symbol, setSymbol] = useState();
  const onChangeWallet = (event) => setWallet(event.target.value);

  const onChangeSelect = (event) => {
    if (event.target.value === "x") {
      return;
    }
    setConvert(event.target.value.split(",")[1]);
    setSymbol(event.target.value.split(",")[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (event === 0) {
      return;
    }
    setWallet("");
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    console.log("Get Data");
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("change wallet");
  }, [wallet]);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <div>
        <h3>
          {wallet !== "" &&
            "My Wallet " +
              wallet +
              " USD Converted to " +
              (isNaN(Math.floor(wallet / convert))
                ? ""
                : Math.floor(wallet / convert) + " " + symbol)}
        </h3>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChangeWallet}
            value={wallet}
            type="number"
            placeholder="My Wallet.."
          />
          <select onChange={onChangeSelect}>
            <option value={"x"}>Select Coin Converter</option>
            {coins.map((item) => (
              <option value={[item.symbol, item.quotes.USD.price]}>
                {item.name}({item.symbol})
              </option>
            ))}
          </select>
        </form>
      </div>

      <hr />

      <ul>
        {coins.map((item) => (
          <li key={item.rank}>
            {item.name} ({item.symbol}): ${item.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
