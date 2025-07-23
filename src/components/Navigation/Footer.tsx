import { Link } from 'react-router-dom';


type NavLink = {
    name: string;
    path: string
}

export function Footer() {

    const navLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'Headphones', path: '/headphones' },
        { name: 'Speakers', path: '/speakers' },
        { name: 'Earphones', path: '/earphones' }
    ]

    return (
        <footer className="bg-[#101010] flex flex-col justify-between items-center  p-6 border-t-3 border-t-[#D87D4A] font-manrope tracking-wider w-full">
            <nav className="flex flex-col items-center md:items-start gap-9 text-center text-[#ffff] md:max-w-2xl">

                {/* Logo */}
                <Link to='/' className='hover:pointer'>
                    <img src='/assets/shared/desktop/logo.svg' />
                </Link>

                <ul className='flex flex-col md:flex-row gap-4 items-center justify-center lg:space-x-8 '>

                    {navLinks.map((link) => (
                        <li key={link.name} className="text-[#ffff] uppercase text-sm font-bold hover:text-[#D87D4A] transition-colors duration-300">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}

                </ul>
                <p className='text-[#878787] md:text-lg md:text-left lg:font-light'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.</p>

                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:mt-6 md:w-full  '>
                    <p className='text-[#878787] font-bold text-sm md:text-md'>  Copyright 2021. All Rights Reserved</p>

                    {/* social media icons */}
                    <div className='flex gap-4 md:ml-auto'>
                        <img src='/assets/shared/desktop/icon-facebook.svg' alt='facebook icon' />
                        <img src='/assets/shared/desktop/icon-instagram.svg' alt='instagram icon' />
                        <img src='/assets/shared/desktop/icon-twitter.svg' alt='twitter icon' />

                    </div>
                </div>

            </nav>

        </footer>
    );
}