// import { useEffect, useState } from 'react';
// function useDebounce(value, delay) {
//     const [debounced, setDebounced] = useState(value);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebounced(value);
//         }, delay);
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [value]);

//     return debounced;
// }
let timer;

function useDebounce(value, delay, callback) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        callback(value);
    }, delay);
}

export default useDebounce;
