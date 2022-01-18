import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { countriesActions } from '../actions/countriesActions';
import {addcountry} from '../actions/countriesActions';
import "../components/style.css";

function Countries(){
    const [newCountry, setNewCountry]= useState({
        name:"",
        population:"",
        land_area:""
    })
    console.log("State",newCountry)
   


    const dispatch = useDispatch()
    useEffect(() => {
      console.log("useEffect")
        dispatch(countriesActions()) 
    }, [dispatch])

    const countriesData = useSelector(state => state.countries)

    console.log("Maanta", countriesData)


const handleChange = (e) => {
    // Handle changes
    setNewCountry({ ...newCountry, [e.target.name]: e.target.value });
  };

// const dispatch = useDispatch()
const handleSubmit = () =>{
    dispatch(addcountry(newCountry));
    setNewCountry()

}
return (

     <div className="add_country">
        <input
        className="input_feild"
          type="text"
          name="name"
          value={newCountry.name}
          onChange={handleChange}
          placeholder="Country Name"
        />
        <input
        className="input_feild"
          type="text"
          name="population"
          value={newCountry.population}
          onChange={handleChange}
          placeholder="Population"
        />
          <input
          className="input_feild"
          type="text"
          name="land_area"
          value={newCountry.land_area}
          onChange={handleChange}
          placeholder="Land Area"
        />
        {/* <button onClick={() => handleSubmit()}>Add Country</button> */}

        <div className='countryList'>
    {countriesData.map((oneCountry) => (

       <div className='data'>
            <h3>{oneCountry.name}</h3>
            <h3>{oneCountry.population}</h3>
            <h3>{oneCountry.land_area}</h3>
            </div>
))}


  </div>
      </div>

 

)

}

export default Countries;