import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import CountryProfile from '../CountryProfile/CountryProfile';

const CountryDetails = () => {
    let {countryName} = useParams()
    const [country, setcountry] = useState([]);
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setcountry(data))
    },[])
// console.log(country)
    return (
        <div>
            
            <h1>I am country details from{countryName}</h1>
            {
                country.map(x => <CountryProfile key={x.name} country={x} ></CountryProfile>)
            }
            
        </div>
    );
};

export default CountryDetails;