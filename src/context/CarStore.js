import { listCars } from "../graphql/queries";

let CarStore = {
  state: {
    car: {},
    cars: [],
    getCarsError: null,
    loadingAllCars: true
  },
  reducers: {
    GET_CARS: (payload) => ({ loadingAllCars: false, cars: payload }),
    GET_CARS_ERROR: (payload) => ({loadingAllCars: false, cars: [], getCarsError: payload}),
    LOADING_ALL_CARS: () => ({loadingAllCars: true})
  },
  actions: {
    getCars: {
      loading: "LOADING_ALL_CARS",
      success: "GET_CARS",
      error: "GET_CARS_ERROR",
      action: listCars,
    },
  },
};

export default CarStore;
// return reducers[action.type]
