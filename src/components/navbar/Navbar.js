import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import Button from './Button';
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


const Navbar = () => {
    const [handleNav, setNav] = useState(false);

    const handleHam = () => {
        setNav(true);
    }
    const handleCross = () => {
        setNav(false);
    }

    return (
        <>
            <Zoom left>
                <nav className='w-full fixed top-0 left-0 z-10'>
                    <div className={`navbar ${handleNav ? 'shadow-none' : 'shadow-slate-600'} shadow-lg py-2 px-5 lg:flex md:justify-between items-center bg-black`}>
                        <div className="title z-10">
                            <h1 className='text-blue-500 text-[1.7rem] mx-1 font-bold'>News Website</h1>
                            <span className="top-0 right-0 m-4 text-[1.5rem] cursor-pointer text-white absolute lg:hidden">{handleNav ? <RxCross2 onClick={handleCross} /> : <GiHamburgerMenu onClick={handleHam} />}</span>
                        </div>
                        <div className={`lg:flex shadow-slate-600 shadow-lg absolute lg:static  transition-all ease-in duration-700 ${handleNav ? 'top-[3.5rem] opacity-100' : 'top-[-30rem] opacity-0'} w-full lg:w-auto left-0 lg:opacity-100 lg:shadow-none bg-black lg:bg-transparent lg:border-none rounded-md z-0`}>
                            <ul className='text-white lg:flex lg:mr-[8rem] font-medium text-[1.3rem]'>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/">General</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/business">Business</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/entertainment">Entertainment</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/health">Health</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/science">Science</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/sports">Sports</Link></li>
                                <li className='my-4 lg:my-2 mx-5 lg:mx-3 hover:text-blue-500'><Link to="/technology">Technology</Link></li>
                            </ul>
                            <div className="search mx-5 lg:mx-0 mt-[3rem] lg:mt-0 mb-5 lg:mb-0 flex items-center">
                                <input className='w-[100%] p-2 rounded-md focus:outline-none' type="text" placeholder='search...' />
                                <Button />
                            </div>
                        </div>
                    </div>
                </nav>
            </Zoom>
        </>
    )
}

export default Navbar
