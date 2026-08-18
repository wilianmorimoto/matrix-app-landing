import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<nav id="navbar" className="flex items-center flex-grow p-4 mt-3 bg-transparent">
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0 }}
				className="flex items-center"
			>
				<h1 className="text-[#0f0] duration-300 cursor-pointer hover:text-white text-xl font-bold ml-6">
					Matrix App
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0 }}
				className="flex flex-col md:flex-grow lg:flex-row items-center text-2xl justify-center flex-grow"
			>
				<motion.div
					initial={{ y: 20 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 duration-200 hover:text-white mx-4 cursor-pointer"
				>
					<Link
						to="features"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						About
					</Link>
				</motion.div>
				<motion.div
					initial={{ y: 20 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 duration-200 hover:text-white mx-4 cursor-pointer"
				>
					<Link
						to="testimonials"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Testimonials
					</Link>
				</motion.div>
				<motion.div
					initial={{ y: 20 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 duration-200 hover:text-white mx-4 cursor-pointer"
				>
					<Link
						to="pricing"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Pricing
					</Link>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0 }}
				className="flex items-center"
			>
        <button className="text-[#0f0] mr-6 duration-200 border-[#0f0] border-2 bg-transparent h-10 px-4 rounded-md hover:text-white hover:border-white font-semibold">Contact</button>
      </motion.div>
		</nav>
	);
};

export default Navbar;
