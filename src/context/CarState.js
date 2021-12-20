import React, { createContext, useReducer } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {listCars} from "../graphql/queries";
import { createCar } from "../graphql/mutations";


import CarReducer from "./CarReducer";

const initialState = {
    car: {},
    cars: [],
    error: null,
    loadingAllCars: true,
    loadingNewCar: false,
}

export const CarContext = createContext(initialState);

export const CarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CarReducer, initialState);

    async function getCars(){
        try {
            const data = await API.graphql(graphqlOperation(listCars))
            const items = data.data.listCars.items
            dispatch({
                type:"GET_CARS",
                payload: items
            })
        } catch (error){
            dispatch({
                type: "CAR_ERROR",
                paylaod: error
            })
        }
    }

    async function postCar(input){
        try {
            await API.graphql(graphqlOperation(createCar, {input}))
            getCars();
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <CarContext.Provider
            value={{
                car: state.car,
                cars: state.cars,
                error: state.error,
                loadingAllCars: state.loadingAllCars,
                getCars,
                postCar
            }}
        >
            {children}
        </CarContext.Provider>
    )

}

