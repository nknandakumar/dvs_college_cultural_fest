import React from 'react';

const NavBar = () => {
    const Logo = 'https://www.dvsdegreecollege.org/dvseng/wp-content/uploads/2021/11/logo2021engv1.png';

    return (
        <nav className="flex items-center justify-between px-6 py-4  shadow-lg sticky z-20 top-0 bg-black ">
            {/* Logo */}
            <div className="flex items-center">
                <img src={Logo} className="rounded-full  shadow-md" alt="logo" width={450}  />
               
            </div>

            {/* Nav Items */}
            <ul className="md:flex gap-6 hidden items-center uppercase  text-white font-main font-semibold text-lg">
            <a href="#about">  <li className="hover:text-yellow-300 transition border-b duration-300 cursor-pointer">About</li></a>
             <a href="#events">      <li className="hover:text-yellow-300 border-b transition duration-300 cursor-pointer">Events</li></a>
              <a href="#contact">  <li className="hover:text-yellow-300 transition border-b duration-300 cursor-pointer">Contact</li></a>
            </ul>
        </nav>
    );
};

export default NavBar;
