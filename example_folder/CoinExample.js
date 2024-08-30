import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [doller, setDoller] = useState(0);
    const [coinCount, setCoinCount] = useState(0);
    const [selectValue, setSelectValue] = useState(0);
    const inputCoin = (event) => setDoller(event.target.value);
    const ExChange = () => setCoinCount(doller / selectValue);
    const handleChange = (event) => setSelectValue(event.target.value);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select onChange={handleChange} value={selectValue}>
                    {coins.map((coin ,index) => (
                        <option value={Math.round(coin.quotes.USD.price)}>
                            <li>{coin.name} ({coin.symbol}): ${Math.round(coin.quotes.USD.price)} USD</li>
                        </option>
                    ))}
                </select>
            )}
            <hr />
            <h4>변환할 금액</h4>
            <input onChange={inputCoin} value={doller} type="text"/>$
            <br/>↓<button onClick={ExChange}>Click Exchange</button>
            <h4>변환된 코인 수</h4>
            <input value={coinCount} type="text" disabled/>Coin
        </div>
    );
}

export default App;