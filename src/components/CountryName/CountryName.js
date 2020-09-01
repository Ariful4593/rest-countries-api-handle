import React from 'react';
import { Link } from 'react-router-dom';

const CountryName = (props) => {
    console.log(props)
    const {name} = props.name;
    const countryStyle = {
        border: "1px solid purple",
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name:<Link to={`/name/${name}`}>{name}</Link></h2>
        </div>
    );
};

export default CountryName;