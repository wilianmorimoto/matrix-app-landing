import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomButton from "./CustomButton";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "John Doe",
			quote: "I really like this product, and the website!",
		},
		{
			id: 2,
			name: "Jane Smith",
			quote: "I really like this product, and the website!",
		},
		{
			id: 3,
			name: "David Johnson",
			quote: "I really like this product, and the website!",
		},
	];

	const controls = useAnimation();

	useEffect(() => {
		const handleScroll = () => {
			const testimonialsSection = document.getElementById("testimonials");
			const { top } = testimonialsSection.getBoundingClientRect();
			const isVisible = top < window.innerHeight - 100;

			if (isVisible) {
				controls.start({ opacity: 1, scale: 1 });
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, [controls]);

	return (
		<section
			id="testimonials"
			className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md py-16 mb-[300px] rounded-lg"
		>
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
					Testimonials
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map(test => (
						<motion.div
							key={test.id}
							initial={{
								opacity: 0,
								scale: 0.9,
							}}
							animate={controls}
							transition={{ duration: 0.8 }}
							className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
						>
							<p className="mb-4 text-gray-300">{test.quote}</p>
							<p className="text-white font-bold">{test.name}</p>
						</motion.div>
					))}
				</div>

				<div className="flex justify-center mt-10">
					<CustomButton text="Next Section" link="pricing" />
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
