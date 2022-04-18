import {createContext, useState} from "react";

const SehirContext = createContext();

export const SehirProvider = ({children}) => {
    const [sehir, setSehir] = useState('İstanbul');
    const values = {sehir, setSehir};
    return <SehirContext.Provider value={values}>{children}</SehirContext.Provider>
}
export default SehirContext;