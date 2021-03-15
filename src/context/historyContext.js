import React, { useState } from 'react';


const HistoryContext = React.createContext();

const HistoryContextProvider = (props) => {
    
    const [recent, setRecent] = useState([])
    
    return  <HistoryContext.Provider
    value={{
        recent,
        setRecent

    }}
>
    {props.children}
</HistoryContext.Provider>
}


export {
    HistoryContext,
    HistoryContextProvider
}