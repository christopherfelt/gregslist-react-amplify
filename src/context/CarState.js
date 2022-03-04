import React, { createContext, useReducer } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../graphql/queries";
import { createCar } from "../graphql/mutations";

const initialState = {
  car: {},
  cars: [],
  getCarsError: null,
  postCarError: null,
  loadingAllCars: false,
  submittingNewCar: false,
};
export const CarContext = createContext(initialState);

const CarReducer = (state, action = []) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        loadingAllCars: false,
        cars: action.payload,
      };

    case "CREATE_CAR":
      return {
        ...state,
        submittingNewCar: false,
        cars: [...state.cars, action.payload],
      };

    case "GET_CARS_ERROR":
      return {
        ...state,
        loadingAllCars: false,
        cars: [],
        getCarsError: action.payload,
      };

    case "POST_CAR_ERROR":
      return {
        ...state,
        submittingNewCar: false,
        createCarError: action.payload,
      };

    case "LOADING_ALL_CARS":
      return {
        ...state,
        loadingAllCars: true,
      };

    case "SUBMITTING_NEW_CAR":
      return {
        ...state,
        submittingNewCar: true,
      };

    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CarReducer, initialState);

  async function getCars() {
    dispatch({ type: "LOADING_ALL_CARS" });

    try {
      const data = await API.graphql(graphqlOperation(listCars));
      const items = data.data.listCars.items;
      dispatch({
        type: "GET_CARS",
        payload: items,
      });
    } catch (error) {
      dispatch({
        type: "GET_CARS_ERROR",
        payload: error,
      });
    }
  }

  async function postCar(input) {
    dispatch({ type: "SUBMITTING_NEW_CAR" });

    try {
      const data = await API.graphql(graphqlOperation(createCar, { input }));
      console.log(data);
      getCars();
    } catch (error) {
      console.error(error);
    }
  }

  let actions = {}
  actions["getCarString"] = new Function('getCars()').bind();
  console.log(actions);

  return (
    <CarContext.Provider
      value={{
        car: state.car,
        cars: state.cars,
        getCarsError: state.getCarsError,
        postCarError: state.postCarError,
        loadingAllCars: state.loadingAllCars,
        // getCars,
        getCars: actions.getCarString,
        postCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
