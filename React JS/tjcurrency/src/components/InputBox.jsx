import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="USD",
    amountDisable=false,
    currencyDisable=false,
    className=""
}) {

    const amountInputId=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block font-bold">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5 text-2xl"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={Number(amount)==NaN?0:amount}
                    id={amountInputId}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    step="any"
                    min="0"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 text-lg bg-gray-100 cursor-pointer outline-none capitalize"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((curr)=>{
                          return  <option value={curr} key={curr}>{curr}</option>  
                    })
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;