import Me from "../UI/Me.jsx";
import AboutMe from "../UI/AboutMe.jsx";
import Projects from "../UI/Projects.jsx";
import Skills from "../UI/Skills.jsx";


const AboutMeSection = () => {
	return (
		<section class="h-screen w-screen overflow-auto pt-20 bg-background-color font-acumin">
			<div class="lg:columns-2 md:columns-2 sm:columns-1">
				<Me />
				<div class="overflow-auto">
					<AboutMe />
					<Projects />
					<Skills />
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;


