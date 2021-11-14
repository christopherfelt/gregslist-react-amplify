const CarReducer = (state, action) => {
    switch(action.type){
        case "GET_CARS":
            return {
                ...state,
                loadingAllCars: false,
                cars: action.payload
            };
        default:
            return state;
    }
};

export default CarReducer;