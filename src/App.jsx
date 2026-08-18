import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import MatrixRainingCode from "./components/MatrixRainingCode";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className='absolute inset-0'/>
			<div className="flex flex-col">
				<Navbar />
				<Hero />
				<Features />
				<Testimonials />
				<Pricing />
				<Footer />
			</div>
		</div>
	);
}

export default App;
