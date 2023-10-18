import experiencies from "../data/experience.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useUiStore } from "../hooks";

const Experience = () => {
	const { language } = useContext(LanguageContext);
    const {openDateModal} = useUiStore();

    const onClick = (experienceId) => {
        openDateModal(experienceId);
    }

	return (
		<div class="h-full p-2 lg:p-10">
			{language === "es" ? (
				<h1 class=" text-cyan-950 text-2xl font-bold text-center lg:text-left">
					Experiencia
				</h1>
			) : (
				<h1 class=" text-cyan-950 text-2xl font-bold text-center lg:text-left">
					Experience
				</h1>
			)}
			{experiencies.map((experience) => (
				<article
					class="flex items-center rounded-lg hover:bg-black hover:bg-opacity-5 hover:shadow-2xl p-5"
					key={experience.id}>
					<img
						src={experience.image}
						alt=""
						class="w-1/5 h-auto mr-20 hidden lg:block rounded-full object-cover"
					/>
					<div class="text-left flex flex-col">
						<h1 class="text-xl font-semibold text-cyan-800 mb-2">
							{experience.title}
						</h1>
						<h2 class="text-lg font-medium text-cyan-800/80">
							{experience.company}
						</h2>
						{language === "es" ? (
							<p class="text-[#979795] my-2">{experience.spanishPeriod}</p>
						) : (
							<p class="text-[#979795] my-2">{experience.period}</p>
						)}
						<div class="flex">
							<a
								key={experience.id}
								title={experience.title}
								target="_blank"
								class="flex items-center hover:bg-black hover:bg-opacity-5 hover:shadow-2xl rounded-lg hover:p-1">
								{language === "es" ? (
									<button onClick={() => onClick(experience.id)}>
										<p class="text-sm text-cyan-800">Ver más</p>
									</button>
								) : (
									<button onClick={() => onClick(experience.id)}>
										<p class="text-sm text-cyan-800">See more</p>
									</button>
								)}
							</a>
						</div>
					</div>
				</article>
			))}
		</div>
	);
};

export default Experience;
