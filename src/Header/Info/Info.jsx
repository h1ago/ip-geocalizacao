import React from 'react';
import PropTypes from'prop-types';
import './Info.less';


function Info(){

    return (
        <div className='info'>

            <div className='info__container-item'>
                <h3>Endereço de IP</h3>
                <h2>172.85.12.253</h2>
            </div>

            <div className='info__container-item'>
                <h3>Localização</h3>
                <h2>Jequié, BA</h2>
            </div>

            <div className='info__container-item'>
                <h3>ISP</h3>
                <h2>HENET</h2>
            </div>

        </div>
    )
}

Info.propTypes = {

}


export default Info;

