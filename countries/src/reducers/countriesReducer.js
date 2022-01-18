//Import Action Types

import { ADD_COUNTRY, GET_COUNTRY} from "../actions/countriesActions";

const initialState = {
    countries: [],
    fetchingCountries: false,
    addingCountry: false,
    error: ""
   
    };

export const countriesReducer = (state = initialState, action) => {

    console.log("reducer",action.payload)
    switch(action.type){
        case ADD_COUNTRY: 
        return{
            ...state,
            countries: [
                ...state.countries,
                {id:Date.now(), name:action.payload.name, population:action.payload.population, land_area:action.payload.land_area}
            ],

            fetchingCountries:false,
            error:""
        }
        case GET_COUNTRY: 
        return{
            ...state,
           countries:action.payload,
            addingCountry:false,
            error:""
        }
       
        default: 
        return state

    }
}
