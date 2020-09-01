import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CountryName from '../CountryName/CountryName';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <h1>I am from Home!</h1>
            <h1>Total Country in the World: {country.length}</h1>
            {
                country.map(x => <CountryName name={x} key={x.name}></CountryName>)
            }
        </div>
    );
};

export default Home;