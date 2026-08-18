import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Modal from "react-modal";
import CustomButton from './CustomButton';

const Pricing = () => {
	const pricingOptions = [
		{
			id: 1,
			title: "Basic",
			price: "$9.99",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			id: 2,
			title: "Pro",
			price: "$19.99",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			id: 3,
			title: "Premium",
			price: "$29.99",
			features: ["Feature 1", "Feature 2", "Feature 3"],
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

	const [selectedPlan, setSelectedPlan] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleChoosePlan = plan => {
		setSelectedPlan(plan);
		setIsModalOpen(true);
	};

	const handleCloseModal = plan => {
		setSelectedPlan(null);
		setIsModalOpen(false);
	};

	return (
		<section id="pricing" className="bg-transparent px-10 py-16">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
					Pricing
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pricingOptions.map(opt => (
						<motion.div
							key={opt.id}
							className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur p-8 rounded-lg shadow-lg flex flex-col justify-between"
							initial={{ opacity: 0, y: 20 }}
							animate={controls}
							transition={{ duration: 0.8 }}
						>
							<div className="">
								<h3 className="text-xl font-bold text-white mb-4">
									{opt.title}
								</h3>
								<p className="text-green-500 text-2xl font-bold mb-6">
									{opt.price}
								</p>
								<ul className="text-gray-500 mb-6">
									{opt.features.map(feature => (
										<li className="mb-2" key={feature}>
											{feature}
										</li>
									))}
								</ul>

								<div className="">
									<motion.button
										className="bg-white bg-opacity-20 hover:bg-opacity-70 text-green-500 hover:text-green-600 font-semibold rounded-full py-2 px-6 shadow-lg"
										initial={{ opacity0: 0, y: 10 }}
										animate={controls}
										transition={{ duration: 0.8 }}
										onClick={() => handleChoosePlan(opt)}
									>
										Choose Plan
									</motion.button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Plan Details"
				className="modal fixed inset-0 flex items-center justify-center"
				overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
			>
				{selectedPlan && (
					<motion.div
						className="modal-content bg-white w-1/3 p-6 rounded-lg max-w-xl flex flex-col justify-between"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<h2 className="text-xl font-bold mb-4">{selectedPlan.title}</h2>
							<p className="text-green-500 text-2xl font-bold mb-6">
								{selectedPlan.price}
							</p>
							<ul className="text-gray-600 mb-6">
								{selectedPlan.features.map(feature => (
									<li className="mb-2" key={feature}>
										{feature}
									</li>
								))}
							</ul>
						</div>

						<button
							onClick={handleCloseModal}
							className="duration-300 bg-opacity-20 hover:bg-opacity-80 text-green-500 hover:text-green-600 font-semibold py-2 px-6 mx-6 rounded-full shadow-xl"
						>
							Close
						</button>
					</motion.div>
				)}
			</Modal>
			<div className="flex justify-center mt-10">
				<CustomButton text="Next Section" link="footer" />
			</div>
		</section>
	);
};

export default Pricing;
