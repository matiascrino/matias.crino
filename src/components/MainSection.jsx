import Me from "../UI/Me.jsx";
import AboutMe from "../UI/AboutMe.jsx";
import Projects from "../UI/Projects.jsx";
import Skills from "../UI/Skills.jsx";
import Experience from "../UI/Experience.jsx";
import { ExperienceModal } from "./ExperienceModal.jsx";


const AboutMeSection = () => {
	return (
		<section class="h-screen w-screen overflow-auto bg-background-color font-acumin pt-20">
			<div class="lg:columns-2 md:columns-2 sm:columns-1">
				<Me />
				<div class="overflow-auto">
					<AboutMe />
					<Projects />
					<Experience />
					<Skills />
				</div>
			</div>
			<ExperienceModal />
		</section>
	);
};

export default AboutMeSection;


