import educations from "../data/education.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Education = () => {
	const { language } = useContext(LanguageContext);

	return (
		<div class="h-full p-2 lg:p-10">
			{language === "es" ? (
				<h1 class=" text-emerald-900 text-2xl font-bold text-center lg:text-left">
					Educacion
				</h1>
			) : (
				<h1 class=" text-emerald-900 text-2xl font-bold text-center lg:text-left">
					Education
				</h1>
			)}
			{educations.map((education) => (
				<article
					class="flex items-center rounded-lg hover:bg-black hover:bg-opacity-5 hover:shadow-2xl p-5"
					key={education.id}>
					<img
						src={education.image}
						alt=""
						class="w-1/4 h-auto mr-20 hidden lg:block rounded-full object-cover"
					/>
					<div class="text-left flex flex-col">
						<h1 class="text-xl font-semibold text-emerald-800 mb-2">
							{education.title}
						</h1>
						<h2 class="text-lg font-medium text-emerald-900">
							{education.company}
						</h2>
						<p class="text-[#979795] my-2">{education.spanishPeriod}</p>
						<div class="flex">
							<a
								key={education.id}
								title={education.title}
								target="_blank"
								class="flex items-center hover:bg-black hover:bg-opacity-5 hover:shadow-2xl rounded-lg hover:p-1">
								{language === "es" ? (
									<a href={education.link} target="_blank">
										<p class="text-sm text-emerald-800">Ver más</p>
									</a>
								) : (
									<a href={education.link} target="_blank">
										<p class="text-sm text-emerald-800">See more</p>
									</a>
								)}
							</a>
						</div>
					</div>
				</article>
			))}
		</div>
	);
};

export default Education;
