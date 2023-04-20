import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary'>
            <h4 className='text-white text-center pt-4'>Q-Zone</h4>
            <img className='p-3' src={qzone1} alt="" />
            <img className='p-3' src={qzone2} alt="" />
            <img className='p-3' src={qzone3} alt="" />
        </div>
    );
};

export default QZone;