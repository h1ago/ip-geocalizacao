import React from 'react';
import PropTypes from'prop-types';
import './Header.less';
import Input from './Input/Input';
import Info from './Info/Info';


function Header(props){

    return (
        <div className='header'>

            <h1>IP Geolocalização</h1>

            <Input />
            
            <Info/>

        </div>
    )
}

Header.propTypes = {

}


export default Header;

