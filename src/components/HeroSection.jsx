import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';



const HeroSection = () => {

	const { language, dispatch } = useContext(LanguageContext);

    return (
			<section class="h-screen w-screen text-center relative overflow-hidden ">
				<div class="z-30 relative h-full flex flex-col">
					<header class="w-2/3 mx-auto relative flex items-center justify-center h-screen">
						<div class="flex items-center flex-col justify-center w-full">
							<div class="flex flex-col -z-10 max-[700px]:px-2">
								<h1 class="font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#fde089] dark:to-[#ec8b26] from-[#ffd24e] to-[#b96205]">
									<span>osoñodevs</span>
								</h1>
								{language === "en" ? (
								<h2 class="text-neutral-400 text-2xl">
									software development
								</h2>
								):
								(
								<h2 class="text-neutral-400 text-2xl">
									desarrollo de software
								</h2>
								)
								}
							</div>
						</div>
					</header>

					<footer class="flex flex-grow flex-nowrap justify-end flex-col pb-2">
						<a class="animate-bounce-vertical flex justify-center">
							<img
								alt="Pointing Icon"
								loading="lazy"
								width="37"
								height="37"
								decoding="async"
								data-nimg="1"
								class="rotate-180 w-10 h-10"
								src="pointing-up.webp"></img>
						</a>
					</footer>
				</div>
			</section>
		);

}

export default HeroSection;
