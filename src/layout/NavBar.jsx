
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeLink = ({isActive}) => (isActive) ? 'p-5 bg-gray-200/10 border-b-2   border-red-500':'p-5';

    return (
        <header className='bg-black text-white sticky top-0'>
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <img className='w-40' src={logo} alt="Logo" />
                <Menu onClick={() => setIsOpen(prev => !prev)} className='block lg:hidden mr-3'/>
                <ul className='hidden lg:block'>
                    <NavLink className={activeLink} to='/'>Home</NavLink>
                    <NavLink className={activeLink} to='/pokemons'>Pokemon</NavLink>
                    <NavLink className={activeLink} to='/regions'>Regions</NavLink>
                    <NavLink className={activeLink} to='/types'>Types</NavLink>
                    <NavLink className={activeLink} to='/favorites'>Favorites</NavLink>
                    <NavLink className={activeLink} to='/about'>About</NavLink>
                </ul>
                <div className='hidden lg:block'>
                    <form className='w-full border border-gray-700 rounded-sm p-1 flex items-center'>
                        <input className='outline-none' type="text" name="search" placeholder='Search Pokemon....'/>
                        <Search className='hover:cursor-pointer' size={20} opacity={0.4}/>
                    </form>
                </div>
            </nav>

            {/**
             * Nav For Mobile
             */}
             <nav className={`${(isOpen)? 'flex' : 'hidden'} w-full md:hidden bg-black py-5 px-5 rounded-lg flex-col justify-between items-center absolute top-16.5 transition duration-700 ease-in-out`}>
                <ul className='flex flex-col items-center'>
                    <NavLink className='px-10 py-2' to='/'>Home</NavLink>
                    <NavLink className='px-10 py-2' to='/pokemons'>Pokemon</NavLink>
                    <NavLink className='px-10 py-2' to='/regions'>Regions</NavLink>
                    <NavLink className='px-10 py-2' to='/types'>Types</NavLink>
                    <NavLink className='px-10 py-2' to='/favorites'>Favorites</NavLink>
                    <NavLink className='px-10 py-2' to='/about'>About</NavLink>
                </ul>
                <div className='mt-2'>
                    <form className='w-full border border-gray-700 rounded-sm p-1 flex items-center'>
                        <input className='outline-none' type="text" name="search" placeholder='Search Pokemon....'/>
                        <Search className='hover:cursor-pointer' size={20} opacity={0.4}/>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;