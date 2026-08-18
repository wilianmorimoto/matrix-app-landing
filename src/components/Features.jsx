import React from "react";
import { motion } from "framer-motion";
import coms from "../assets/coms.svg";
import EarPhone from "../assets/EarPhone.svg";
import Location from "../assets/Location.svg";
import { useInView } from "react-intersection-observer";
import CustomButton from "./CustomButton";

const Features = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<section
			className="bg-transparent px-10 py-10 mb-[340px]"
			id="features"
			ref={ref}
		>
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
					Key Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col items-center"
					>
						<img
							src={coms}
							alt="message icon"
							className="w-16 h-16 object-contain mb-4"
						/>
						<h3 className="text-xl font-bold text-white mb-2">Feature 1</h3>
						<p className="text-gray-300 text-center">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
							placeat explicabo, facere nisi eius voluptas impedit suscipit
							exercitationem, eveniet molestias incidunt beatae delectus
							asperiores sunt consectetur mollitia modi ipsam nemo?
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col items-center"
					>
						<img
							src={coms}
							alt="message icon"
							className="w-16 h-16 object-contain mb-4"
						/>
						<h3 className="text-xl font-bold text-white mb-2">Feature 2</h3>
						<p className="text-gray-300 text-center">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
							iusto mollitia fugit accusantium rerum eligendi labore asperiores
							repellendus repellat debitis, amet, quas sint unde dolore qui
							ducimus illo earum libero!
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col items-center"
					>
						<img
							src={coms}
							alt="message icon"
							className="w-16 h-16 object-contain mb-4"
						/>
						<h3 className="text-xl font-bold text-white mb-2">Feature 3</h3>
						<p className="text-gray-300 text-center">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
							explicabo quam sequi, minima nihil sint officia architecto eos,
							obcaecati voluptate ullam. Omnis repudiandae sapiente voluptatem
							voluptas explicabo dolore ullam quaerat.
						</p>
					</motion.div>
				</div>
			</div>

			<div className="flex justify-center mt-10">
				<CustomButton text='Next Section' link='testimonials'/>
			</div>
		</section>
	);
};

export default Features;
