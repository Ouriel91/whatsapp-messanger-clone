import React, { createContext, useContext, useReducer } from 'react'

//prepare data store for app 
export const StateContext = createContext()
export const StateProvider = ({ reducer,
    initialState, children }) => (
        <StateContext.Provider
            value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )

//use to pull data to app
export const useStateValue = () => useContext(StateContext)
