import { useEffect, useState } from 'react';
import {InputBox} from './components';
import useCurreny from './hooks/useCurrency';
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurreny(from);
const options= currencyInfo && [...Object.keys(currencyInfo)];
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  }
  useEffect(()=>{
   convert();
  },[from,to,options]);

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ 
            backgroundImage: `url('https://r4.wallpaperflare.com/wallpaper/764/458/364/money-world-map-world-map-wallpaper-b99048cd511a1d8b76c7b8cf30a1166d.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-2xl h-1/2 flex justify-center items-center mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                  id="curr_form"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                  <h1 className='mb-3 drop-shadow-lg [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black text-white rounded-2xl p-2 backdrop-blur-sm bg-black/30 text-3xl text-center font-bold'>TJ Currency Converter</h1>
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            title="Swap"
                            className="text-3xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 font-bold"
                            onClick={swap}
                        >
                            ↕️
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Converted From <span className="font-bold text-lg">{from.toUpperCase()}</span> to <span className="font-bold text-lg">{to.toUpperCase()}</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
