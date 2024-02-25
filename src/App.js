import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg from './assets/imgs/bg-main.png'
import About from "./components/About";
import Stat from "./components/Stat";
import Direction from "./components/Direction";
import WhatYouGet from "./components/WhatYouGet";
import Partners from "./components/Partners";
import Advantages from "./components/Advantages";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
AOS.init()

function App() {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="flex flex-col space-y-12 md:space-y-20">
			<div className="bg-main">
				{/* <img src={bg} className="absolute object-cover w-full -z-10 rounded-b-[30px]" /> */}
				<Navbar/>
				<Hero/>
			</div>
			<About/>
			<Stat/>
			<Direction/>
			<WhatYouGet/>
			<Partners/>
			<Advantages/>
			<Form/>
			<Contacts/>
			<Footer/>
		</div>
	);
}

export default App;
