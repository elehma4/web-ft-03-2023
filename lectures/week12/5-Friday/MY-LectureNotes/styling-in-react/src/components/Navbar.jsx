import React from 'react';


const Navbar = ({brandLink, brandText, brandDescription}) => {

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] bg-white px-24'>
            <ul className='flex flex-row justify-between items-center w-full h-full px-2 2xl:px-16'>

                <li href="#home">Brand Link{brandLink}</li>
                <li>Books From Our Past{brandText}</li>
                <li>Description{brandDescription}</li>

            </ul>

        </div>
    );
};

export default Navbar