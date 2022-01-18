//Import Axios
import axios from 'axios'


//Action Types

export const GET_COUNTRY = "GET_COUNTRY";
export const ADD_COUNTRY = "ADD_COUNTRY";
//Action Creator

export const countriesActions = () =>(dispatch) =>  {
console.log("action started")
    dispatch({type:GET_COUNTRY})
    axios.get("http://localhost:3333/countries")
    .then((res) => {
       console.log("ACTION SUCEES" , res)
      

        dispatch({type:GET_COUNTRY, payload: res.data})
    })
    .catch((err) => {
      console.log(err)
    });
    
    
}
export const addcountry = (addNewCountry) =>{
return{
        type:ADD_COUNTRY,
        payload:addNewCountry
}
}

