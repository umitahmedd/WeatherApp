import { createStore } from "redux";

let initialState = {
    dataOneDay: [],
    dataSevenDays: [],
    dataOneMonth: [],
    activeCity: "istanbul",
    condition:""
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case "GET_WEATHER_FOR_ONE_DAY":{
            return{
                ...state,
                dataOneDay: action.veriler
            }
        }
        case "POST_ACTIVE_CITY":{
            return{
                ...state,
                activeCity: action.veriler
            }
        }
        case "GET_WEATHER_FOR_SEVEN_DAYS":{
            return{
                ...state,
                dataSevenDays: action.veriler
            }
        }
        case "POST_BG_NAME":{
            return{
                ...state,
                condition: action.veriler
            }
        }
        case "GET_WEATHER_FOR_ONE_MONTH":{
            return{
                ...state,
                dataOneMonth: action.veriler
            }
        }
        default:{
            return state;
        }
    }
}
const store = createStore(reducer);
export default store;