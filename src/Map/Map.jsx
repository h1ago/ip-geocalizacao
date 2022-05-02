import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import PropTypes from'prop-types';
import './Map.less';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlhZ29wZXJlaXJhIiwiYSI6ImNsMm5yZzI4MTBsMXgzZGx4Ym50aDNzbnYifQ.3O4AU2OgkMPvN7RPqzgzgg';


function Map(props){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        
    });


    return (
        <div ref={mapContainer} className='map'>

        </div>
    )
}

Map.propTypes = {

}


export default Map;

