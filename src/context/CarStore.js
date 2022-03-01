let CarStore = {
    state: {
        car:{},
        cars:[],
    },
    reducers:{
        "GET_CARS": (payload) => ({loadingCars:false, cars:payload})
    },
    actions:{

    }
}

export default CarStore;
// return reducers[action.type]