import { API, graphqlOperation } from "aws-amplify";
import React, { createContext, useReducer } from "react";
import { listCars } from "../graphql/queries";

import Stores from "./Register"

let GlobalState = {};

// console.log("Stores", Stores)

for(const element in Stores){
    GlobalState = {...GlobalState, ...Stores[element].state};
}

// console.log("GlobalState", GlobalState)

export const GlobalContext = createContext(GlobalState);

let ConsolidatedReducers = {};

let actionReducers = {};
for (const element in Stores) {

  let currentStoreActions = Stores[element].actions;
  if (currentStoreActions) {
    for (const [i, e] of currentStoreActions.entries()) {
      let keys = Object.keys(e);
      for (const k of keys) {
        if (k !== "action" && k !== "name") {
          if (typeof e[k] == "function") {
            actionReducers[e.name + k] = e[k];
            currentStoreActions[i][k] = e.name + k;
          }
        }
      }
    }
  }
}

for(const element in Stores){
  ConsolidatedReducers = {...ConsolidatedReducers, ...Stores[element].reducers}
}

ConsolidatedReducers = {...ConsolidatedReducers, ...actionReducers}

const GlobalReducer = (state, action = []) =>{
    if(ConsolidatedReducers[action.type]){
        return {...state, ...(ConsolidatedReducers[action.type](action.payload, state))}
    }
    return state;
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, GlobalState);

    let value = {};

    // console.log("state", state)

    value = {...state};

    let consolidatedActions = [];

    for(const element in Stores){
        // console.log("element", Stores[element].actions);
        consolidatedActions = [...consolidatedActions, ...Stores[element].actions]
    }

    // value = {
    //   ...value,
    //   methods: [
    //     ...consolidatedActions.map((element) => {
    //       element.func = async (input = {}) => {
    //         dispatch({ type: element.loading });
    //         try {
    //           const response = await API.graphql(graphqlOperation(element.action, {input}));
    //           console.log("input", input)
    //           const firstKey = Object.keys(response.data)[0];
    //           console.log("response",response);
    //           const data = response.data[firstKey].items ? response.data[firstKey].items : response.data[firstKey];
    //           console.log("returned data: ", data);
    //           dispatch({ type: element.success, payload: data });
    //         } catch (msg) {
    //           dispatch({
    //             type: element.error,
    //             payload: msg,
    //           });
    //         }
    //       };
    //       return element;
    //     },
    //     ),
    //   ],
    // };

    value = {
      ...value,
      run: (methodName, input={}) => {
      let method = [...consolidatedActions.map((element) => {
          element.func = async () => {
            dispatch({ type: element.loading });
            try {
              const response = await API.graphql(graphqlOperation(element.action, {input}));
              
              const firstKey = Object.keys(response.data)[0];
              const data = response.data[firstKey].items ? response.data[firstKey].items : response.data[firstKey];
              console.log("data:", response)
              dispatch({ type: element.success, payload: data });
            } catch (response) {
              console.log(response.errors[0]);
              dispatch({
                type: element.error,
                payload: response.errors[0],
              });
            }
          };
          return element;
        },
        ),
      ].find((method) => method.name === methodName);
      method.func();
    }
      ,
    };

    // console.log("value after", value)


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )



}




