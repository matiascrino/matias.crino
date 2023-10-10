import "../dist/output.css";
import AboutMeSection from "./components/MainSection";
import HeroSection from "./components/HeroSection";
import LandingHeader from "./components/LandingHeader";

function App() {
	return (
		<>
			<LandingHeader />

			<main class="snap-y snap-mandatory relative w-full h-screen overflow-auto bg-background-color font-acumin">
				<div class="snap-start">
					<HeroSection />
				</div>
				<div class="snap-start">
					<AboutMeSection />
				</div>
			</main>
		</>
	);
}

export default App;
