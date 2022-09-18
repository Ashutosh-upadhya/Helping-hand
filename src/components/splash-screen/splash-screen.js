import React, { useRef, useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './splash-screen.css';
import {TweenMax, Power3} from 'gsap';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { AuthContext } from '../auth/auth';
import Footer from '../footer/footer';
import helperImage from '../../assets/Group.png';

function SplashScreen() {
	const { currentUser } = useContext(AuthContext);

    let jumbotronItem = useRef(null);

		const [colorTheme, setTheme] = useState(localStorage.theme);

		useEffect(() => {
			setTheme(localStorage.theme)
		}, [colorTheme])

    useEffect(() => {
        TweenMax.to(
            jumbotronItem,
            1,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut
            }
        );
    }, [])

	if (currentUser) {
		console.log(currentUser);
		return <Redirect to="/dashboard" />
	}

    return(
			<div id="background" className="h-full md:h-screen transition-all duration-500 splash-screen dark:splash-screen-dark bg-splash">
				<Navbar />
				<div 
					className="jumbotron text-center py-44 lg:py-72 transition-all duration-500 jumbo-slash" >
						
					<div ref={el => {jumbotronItem = el}} className='main-splash'>
					<img src={helperImage} alt="Helper Logo" className="splash-logo" />
						<h1 className="text-7xl text-black dark:text-yellow-400 font-bold transition-all duration-500">Helper's Hand</h1>
						<p className="text-4xl p-6 text-black dark:text-white font-bold transition-all duration-500">Want help, No worries . we are here to help you out</p>
						<Link to='/signup' className="bg-gray-700 hover:bg-gray-800 dark:bg-yellow-400 text-white dark:hover:bg-yellow-500 dark:text-black font-bold py-2 px-5 rounded mb-32 transition-all duration-500 splash-button">Get Started</Link>
					</div>
				</div>
				<Footer />
			</div>
    )
}

export default SplashScreen;