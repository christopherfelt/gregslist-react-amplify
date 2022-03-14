import { listCars } from "../graphql/queries";
import { createCar } from "../graphql/mutations"

let CarStore = {
  state: {
    car: {},
    cars: [],
    getCarsError: null,
    loadingAllCars: true,
    loadingCar: false,
  },
  reducers: {
    // LOADING_ALL_CARS: () => ({loadingAllCars: true}),
    // GET_CARS: (payload) => ({ loadingAllCars: false, cars: payload }),
    // GET_CARS_ERROR: (payload) => ({loadingAllCars: false, cars: [], getCarsError: payload}),
    // LOADING_CAR: () => ({loadingCar: true}),
    // CAR_SUBMITTED: (payload, state) => ({loadingCar: false, cars: [...state.cars, payload]})
  },
  actions: [
    // put reducer in the actions
    // { 
    //   name: "getCars",
    //   loading: "LOADING_ALL_CARS",
    //   success: "GET_CARS",
    //   error: "GET_CARS_ERROR",
    //   action: listCars,
    // },
    {
      name: "getCars",
      loading: () => ({loadingAllCars: true}),
      success: (payload) => ({loadingAllCars: false, cars: payload}),
      error: (payload) => ({loadingAllCars: false, cars:[], getCarsError: payload}),
      action: listCars
    },
    {
      name: "postCars",
      loading: () => ({loadingCar: true}),
      success: "CAR_SUBMITTED",
      error: "POST_CAR_ERROR",
      action: createCar
    }
  ],
};

export default CarStore;

