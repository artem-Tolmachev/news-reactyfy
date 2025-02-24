import { useEffect, useState, FC } from "react";
// Этот хук useDebounce нужен для отложенной обработки изменений значения. Он помогает избежать слишком частых вызовов функции при быстром вводе данных пользователем (например, в поисковой строке).

export const useDebounce  = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
       const handler = setTimeout(() => {
        setDebouncedValue(value)
       }, delay)

       return () => {
        clearTimeout(handler)
       }
    },[value, delay])

    return debouncedValue;
}
