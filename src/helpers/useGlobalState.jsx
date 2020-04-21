import React, { useContext, createContext, useReducer } from 'react';

export const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({ reducer, initialState, children }) => (
    <GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GlobalStateContext.Provider>
);

export const useGlobalState = () => useContext(GlobalStateContext);