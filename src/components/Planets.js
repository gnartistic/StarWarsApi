import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';


const Planets = () =>
{
    const fetchPlanets = async ( page, key ) =>
    {
        const res = await fetch( `http://swapi.dev/api/planets/?page=${ page }` );
        return res.json()

    }

    const [ page, setPage ] = useState( 1 );


    const { isLoading, isError, error, data, isFetching } = useQuery( [ 'planets', page ],
        () => fetchPlanets( page ),
        {
            keepPreviousData: true
        }, );

    if( isLoading ) {
        return <h2>Loading...</h2>
    }

    if( isError ) {
        return <h2>{error.message}</h2>
    }

    return (

        <>
            <h2>Planets</h2>
            <button
                onClick={() => setPage( page => page - 1 )}
                disabled={page === 1}>
                Previous Page
            </button>
            <span>{page}</span>
            <button
                onClick={() => setPage( page => page + 1 )}
                disabled={!data || !data.next}>
                Next page
            </button>
            <div>
                {data.results.map( planet => <Planet key={planet.name} planet={planet} /> )}
            </div>
            {isFetching && 'Loading'}\
        </>
    );
}

export default Planets;