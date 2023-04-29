import React, { useContext } from 'react';
import { UserProvider } from '../../../providers/ContextProvider';

const Footer = () => {
    const { user } = useContext(UserProvider);
    return (
        <div>
            <p className='text-center'><small>Copyright for my news <span className='text-success'>{user && user.email}</span></small></p>
        </div>
    );
};

export default Footer;