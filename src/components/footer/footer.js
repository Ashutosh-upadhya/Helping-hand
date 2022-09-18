import React from 'react';

function Footer() {
    return (
        <footer className={`${window.location.href.includes('login') || window.location.href.includes('signup') ? 'absolute' : 'relative'} ${window.location.href.includes('entries') ? 'hidden' : 'block'} md:relative lg:absolute bottom-0 w-full mt-auto py-3 bg-white-900 bg-opacity-60  transition-all duration-500 text-center`}>
            <p className="font-bold text-black ">Team Marvel © 2022</p>
        </footer>
    )
}

export default Footer;