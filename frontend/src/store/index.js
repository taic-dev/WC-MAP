import { createStore } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "SUCCESS":
            return {
                ...state,
                auth: true
            };
        case "FAILURE":
            return {
                ...state,
                auth: false
            };
        default: 
            return state;
    }
}

const store = createStore(reducer);
export default store;