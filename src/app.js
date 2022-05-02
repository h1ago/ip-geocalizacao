import React, {useEffect, useState} from 'react';
import PropTypes from'prop-types';
import Header from './Header/Header';
import Map from './Map/Map';
import { getIpAdressTracker } from './api';

function App(){

    const [meuovo, setMeuovo] = useState();

    useEffect( () => {
        

        (async ()=> {
            setMeuovo( await getIpAdressTracker() );
        })()

    }, [] );

    console.log(meuovo);
    return (
        <>
            <Header />
            <Map/>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired
}


export default App;

