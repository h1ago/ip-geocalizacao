import React from 'react';
import PropTypes from'prop-types';
import './Input.less';
import ArrowIcon from '../../assets/arrow.svg'


function Input(){

    return (
        <div className='input'>
            <input type='text' className='input__field' placeholder='Digite algum endereço ip...'/>
            <button className='input__button'>
                <ArrowIcon/>
            </button>
        </div>
    )
}

Input.propTypes = {

}


export default Input;

