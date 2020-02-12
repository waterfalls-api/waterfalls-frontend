import React, { useState, createContext } from 'react';

export const WaterFallContext = createContext();

export const WaterFallProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')? true: false);
    const [waterFalls, setWaterFalls] = useState([]);  // useState changed from {} to []
    
    return(
        <WaterFallContext.Provider value={{waterFalls, setWaterFalls, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </WaterFallContext.Provider>
    )
}

export default WaterFallContext;