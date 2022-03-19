import { listCars } from "../graphql/queries";
import { createCar, deleteCar, updateCar } from "../graphql/mutations"

let CarStore = {
  state: {
    car: {},
    cars: [],
    getCarsError: null,
    postCarError: null,
    loadingAllCars: false,
    loadingCar: false,
    deletingCar: false,
    deletingCarError: null,
    updateCar: false
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
      // I don't know how to implement the after rule ... maybe the reducers
      //beforeRule: null, //this will be a call to a function that does some kind of updating
      success: (payload) => ({loadingAllCars: false, cars: payload}),
      error: (payload) => ({loadingAllCars: false, cars:[], getCarsError: payload}),
      action: listCars
    },
    {
      name: "postCar",
      loading: () => ({loadingCar: true}),
      // maybe don't add the car to the state and let the subscribe get it
      // it would be more responsive if it was added in client and just have the subscribe check
      success: (payload, state) => ({loadingCar:false, cars:[...state.cars, payload]}),
      error: (payload) => ({loadingCar: false, postCarError: payload}),
      action: createCar
    },
    {
      name: "putCar",
      loading: () => ({updatingCar: true }),
      success: (payload, state) => ({updatingCar: false, cars: [...state.cars.filter((car) => (car.id === payload.id)), payload]}),
      error: (payload) => ({loadingCar: false, putCarError: payload}),
      action: updateCar
    },
    {
      name:"deleteCar",
      loading: () => ({deletingCar: true}),
      success: (payload, state) => ({deletingCar: false, cars: state.cars.filter((car)=> car.id === payload.id)}),
      error: (payload) => ({deletingCar: false, deletingCarError: payload}),
      action: deleteCar
    }
  ],
};

export default CarStore;

