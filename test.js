// import { listCars } from "../graphql/queries";
// import { createCar } from "../graphql/mutations"

let CarStore = {
  state: {
    car: {},
    cars: [],
    getCarsError: null,
    loadingAllCars: true,
    loadingCar: false,
  },
  reducers: {
    LOADING_ALL_CARS: () => ({loadingAllCars: true}),
    GET_CARS: (payload) => ({ loadingAllCars: false, cars: payload }),
    GET_CARS_ERROR: (payload) => ({loadingAllCars: false, cars: [], getCarsError: payload}),
    LOADING_CAR: () => ({loadingCar: true}),
    CAR_SUBMITTED: (payload, state) => ({loadingCar: false, cars: [...state.cars, payload]})
  },
  actions: [
    // put reducer in the actions
    { 
      name: "getCars",
      loading: "LOADING_ALL_CARS",
      success: "GET_CARS",
      error: "GET_CARS_ERROR",
      action: "listCars",
    },
    {
      name: "postCars",
      loading: () => ({loadingCar: true}),
      success: "CAR_SUBMITTED",
      error: "POST_CAR_ERROR",
      action: "createCar"
    }
  ],
};

const Stores = {
    CarStore: CarStore
}

let ConsolidatedReducers = {};

for(const element in Stores){
    // if(Stores[element].reducers){
    //     ConsolidatedReducers = {...ConsolidatedReducers, ...Stores[element].reducers}
    // }
    let actionReducers = {}
    let currentStoreActions = Stores[element].actions
    if(currentStoreActions){
        for(const [i, e] of currentStoreActions.entries()){
            console.log(i)
            console.log("e", e)
            let keys = Object.keys(e);
            for(const k of keys){
                if(k !== "action" && k !=="name"){
                    if((typeof e[k]) == "function"){
                        actionReducers[e.name+k] = e[k]
                        currentStoreActions[i][k] = e.name+k
                    }
                }
            }
        }
    }

    console.log("actionsReducers", actionReducers)
    console.log(Stores[element])

}



