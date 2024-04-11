// import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2 mt-3'>

            <img className='mx-auto' src={logo} alt="" />

            <p>journalizam without fear of favour</p>

            <p className='text-xl' > {moment().format("dddd MMMM D YYYY")}</p>

        </div>
    );
};

export default Header;