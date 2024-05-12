import { useEffect, useState } from "react";

export default function useCurreny(currency){
const [data,setData]=useState({});
useEffect(()=>{
 fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_KEY}&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.data))
},[currency]);
return data;
}

