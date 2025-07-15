import { useState } from 'react';
import { Link } from 'react-router-dom';


type NavLink = {
  name: string;
  path: string
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Headphones', path: '/headphones' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Earphones', path: '/earphones' }
  ]

  return (
    <header className="bg-[#101010] z-50 flex justify-between items-center h-24 p-4 border-b-1 border-b-[#fafafa] mr-12 ml-12  md:h-24 font-manrope uppercase tracking-wider ">
      <nav className=" relative container mx-auto max-w-6xl w-full flex justify-between items-center">

        <button className='text-white lg:hidden focus:outline-none mr-4' onClick={handleNav}>
          <img src='src/assets/shared/tablet/icon-hamburger.svg' alt='menu icon' />
        </button>

        {/* Logo */}
        <Link to='/' className='hover:pointer'>
          <img src='src/assets/shared/desktop/logo.svg' />
        </Link>

        {/* Desktop Navigation */}

        <ul className='hidden lg:flex lg:flex-row items-center justify-center  lg:space-x-8  lg:static  lg:w-auto'>

          {navLinks.map((link) => (
            <li key={link.name} className="text-[#ffff]">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}

        </ul>

        {/* Cart Icon */}
        <Link to='/cart' className='hover:pointer'>
          <img src="src/assets/shared/desktop/icon-cart.svg" className=' md:block' alt='cart icon' />
        </Link>

        {/* Mobile Menu */}

        {isMenuOpen && (

          <ul className='flex flex-col items-center absolute top-16 left-0 shadow-lg  w-full bg-[#101010] z-50 p-6 space-y-4  lg:hidden rounded-b-lg animate-slideDown border-[#fafafa] text-white'>
            {navLinks.map((link) => (
              <li key={link.name} className='w-full text-center border-b pb-2 border-[#fafafa] last:border-0'>
                <Link to={link.path} onClick={handleNav}>{link.name}</Link>
              </li>
            ))}
          </ul>
        )}

      </nav>

    </header>
  );
}