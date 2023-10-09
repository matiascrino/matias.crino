import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LandingHeader = () => {
	const { language, dispatch } = useContext(LanguageContext);
	

	const changeEnglish = () => {
		if (language === "es") {
			dispatch({ type: "en" });
		}
	};
	const changeSpanish = () => {
		if (language === "en") {
			dispatch({ type: "es" });
		}
	};

	useEffect(() => {

	}, [language]);

	return (
		<header class=" py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40">
			<nav class="flex flex-grow justify-end basis-0">
				<ul class="flex text-sm [&>li>button]:text-black [&>li>button]:font-medium [&>li>button]:inline-block [&>li>button]:px-4 [&>li>button]:py-2x">
					<li>
						<button
							onClick={changeEnglish}
							class={language === "en" ? "underline" : ""}>
							ENG
						</button>
					</li>
					<li>
						<a href=""> | </a>
					</li>
					<li>
						<button
							onClick={changeSpanish}
							class={language === "es" ? "underline" : ""}>
							SPA
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default LandingHeader;
