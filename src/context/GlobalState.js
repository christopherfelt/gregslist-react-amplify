import React, { createContext, useReducer } from "react";

import Stores from "./Register"

let GlobalState = {};

// loop through and construct the states
Stores.object.forEach(element => {
    GlobalState = {...GlobalState, ...element.state}
});

export const GlobalContext = createContext(GlobalState);

// need to for loop through reducers
let GlobalReducers = {};

const GlobalReducer = (state, action = []) =>{
    if(GlobalReducers[action.type]){
        return {...state, ...(GlobalReducer[action.type](action.payload))}
    }
    return state;
}


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, GlobalState);

}




