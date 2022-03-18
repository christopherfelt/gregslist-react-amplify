import { listCars } from "../graphql/queries";
import { createCar } from "../graphql/mutations"

let CarStore = {
  state: {
    car: {},
    cars: [],
    getCarsError: null,
    postCarError: null,
    loadingAllCars: true,
    loadingCar: false,
    deletingCar: false,
  },
  reducers: {
    // LOADING_ALL_CARS: () => ({loadingAllCars: true}),
    // GET_CARS: (payload) => ({ loadingAllCars: false, cars: payload }),
    // GET_CARS_ERROR: (payload) => ({loadingAllCars: false, cars: [], getCarsError: payload}),
    // LOADING_CAR: () => ({loadingCar: true}),
    // CAR_SUBMITTED: (payload, state) => ({loadingCar: false, cars: [...state.cars, payload]})
  },
  actions: [
    {
      name: "getCars",
      loading: () => ({loadingAllCars: true}),
      success: (payload) => ({loadingAllCars: false, cars: payload}),
      error: (payload) => ({loadingAllCars: false, cars:[], getCarsError: payload}),
      action: listCars
    },
    {
      name: "postCar",
      loading: () => ({loadingCar: true}),
      // maybe don't add the car to the state and let the subscribe get it
      success: (payload, state) => ({loadingCar:false, cars:[...state.cars, payload]}),
      error: (payload) => ({loadingCar: false, postCarError: payload}),
      action: createCar
    },
    {
      name:"deleteCar",
      loading: () => ({deletingCar: true})

    }
  ],
};

export default CarStore;

