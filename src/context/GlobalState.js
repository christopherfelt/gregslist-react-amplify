import { API, graphqlOperation } from "aws-amplify";
import React, { createContext, useReducer } from "react";
import { listCars } from "../graphql/queries";

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
        return {...state, ...(ConsolidatedReducers[action.type](action.payload))}
    }
    return state;
}


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, GlobalState);

    let value = {};

    console.log("state", state)

    value = {...state};

    let consolidatedActions = [];

    for(const element in Stores){
        console.log("element", Stores[element].actions);
        consolidatedActions = [...consolidatedActions, ...Stores[element].actions]
    }


    /**
     * Populating the values object using the map array method every other way
     * I kept coming against the following error
     * TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
     * I attempted to many paths including using the new AsyncFunction however
     * using this constructor does not allow access to other variable and methods
     * with in the function. Classes might have worked but I did not attempt it
     */

    value = {
      ...value,
      methods: [
        ...consolidatedActions.map((element) => {
          element.func = async () => {
            dispatch({ type: element.loading });
            try {
              const data = await API.graphql(graphqlOperation(element.action));
              const firstKey = Object.keys(data.data)[0];
              const items = data.data[firstKey].items;
              dispatch({ type: element.success, payload: items });
            } catch (msg) {
              dispatch({
                type: element.error,
                payload: msg,
              });
            }
          };
          return element;
        }
        ),
      ],
    };


    console.log("value after", value)


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )



}




