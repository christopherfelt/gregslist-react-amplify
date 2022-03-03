import { API, graphqlOperation } from "aws-amplify";
import React, { createContext, useReducer } from "react";
// import { listCars } from "../graphql/queries";

import Stores from "./Register"

let GlobalState = {};

console.log("Stores", Stores)

for(const element in Stores){
    GlobalState = {...GlobalState, ...Stores[element].state};
}

console.log("GlobalState", GlobalState)

export const GlobalContext = createContext(GlobalState);

let ConsolidatedReducers = {};

for(const element in Stores){
    ConsolidatedReducers = {...ConsolidatedReducers, ...Stores[element].reducers}
}

const GlobalReducer = (state, action = []) =>{
    if(ConsolidatedReducers[action.type]){
        return {...state, ...(GlobalReducer[action.type](action.payload))}
    }
    return state;
}


export const GlobalProvider = ({ children }) => {
    const [state, dispatch]8 = useReducer(GlobalReducer, GlobalState);

    function getFunction(loading, success, error, action){
        return new AsyncFunction(){
            dispatch({type: loading })
            try {
                const data = await API.graphql(graphqlOperation(action));
                const firstKey = Object.keys(data.data)[0];
                const items = data.data[firstKey].items;
                dispatch({type: success, payload: items}) 
            } catch (msg) {
                dispatch({
                    type: error,
                    payload: msg
                })
            }
        };
    }

    let value = {};

    console.log("state", state)

    value = {...state};

    let consolidatedActions = {};

    for(const element in Stores){
        console.log("element", Stores[element].actions);
        consolidatedActions = {...consolidatedActions, ...Stores[element].actions}
    }

    let actions = {}

    console.log("Consildated actions", consolidatedActions)

    Object.keys(consolidatedActions).forEach(element => {
        let loading = consolidatedActions[element].loading;
        let success = consolidatedActions[element].success;
        let error = consolidatedActions[element].error;
        let action = consolidatedActions[element].action;
        // actions[element] = getFunction(consolidatedActions[element]);
        actions[element] = getFunction(loading, success, error, action);
    })

    console.log("value before", value)
    console.log("actions", actions);

    for( const element in actions){
        value = {...value, ...actions[element]} 
    }

    console.log("value after", value)


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )



}




