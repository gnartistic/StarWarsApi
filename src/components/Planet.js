import React from 'react';

const Planet = ( { planet } ) =>
{
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p>Population: {planet.population}</p>
            <p>Diameter: {planet.diameter}km</p>
            <p>Terrain: {planet.terrain}</p>
            <p>{planet.rotation_period} hours in a day</p>
            <p>{planet.orbital_period} days in a year</p>
        </div>
    );
}

export default Planet;