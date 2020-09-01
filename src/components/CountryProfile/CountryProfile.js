import React from 'react';

const CountryProfile = (props) => {
    const { name, capital, alpha2Code, alpha3Code, area, flag, numericCode, population, region, subregion } = props.country;
    const countryStyle = {
        border: "1px solid purple",
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        display: "flex",
    }
    return (
        <div style={countryStyle}>
            <div style={{width: "500px"}}>
                <h3>Country Name: {name}</h3>
                <p>Capital: {capital}</p>
                <p>Alpha2Code: {alpha2Code}</p>
                <p>Alpha3Code: {alpha3Code}</p>
                <p>Area: {area}</p>
                
                <p>NumericCode: {numericCode}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Subregion: {subregion}</p>
            </div>
            <div>
                <img style={{ width: "100%",height: "350px" }} src={flag} alt="" />
            </div>

        </div>
    );
};

export default CountryProfile;