import React, { useState } from 'react';


const NumberContext = React.createContext();

const NumberContextProvider = (props) => {
    const [wordingNumber,setWordingNumber] = useState('')

    return  <NumberContext.Provider
    value={{
        wordingNumber,
        setWordingNumber
    }}
>
    {props.children}
</NumberContext.Provider>
}


export {
    NumberContext,
    NumberContextProvider
}