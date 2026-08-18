import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CustomButton = ({ text, link }) => {
	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay: 0.1 }}
			className="bg-white duration-300 bg-opacity-20 hover:bg-opacity-80 text-green-500 hover:text-green-600 font-semibold py-2 px-6 mx-6 rounded-full shadow-lg"
		>
			<Link to={link} smooth={true} duration={500} className="cursor-pointer">
        {text}
      </Link>
		</motion.button>
	);
};

export default CustomButton;
