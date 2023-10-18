import socialmedia from '../data/socialmedia.json'
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';


const Me = () => {

	const { language } = useContext(LanguageContext);


    return (
			<div
				class="flex flex-col justify-center items-center space-between lg:sticky md:sticky lg:top-0 md:top-0"
				style={{ height: "calc(100vh - 80px)" }}>
				<div class="w-36 h-36  md:w-36 md:h-36 lg:w-36 lg:h-36 rounded-full overflow-hidden">
					<img
						src="profilePic.png"
						alt=""
						class="w-full h-full object-cover object-center rounded-full"
					/>
				</div>
				<div class="w-96 flex-grow text-center mt-2">
					<h1 class="text-cyan-950 text-2xl">Matias Crino</h1>
					<h2 class="text-cyan-950/80">Full Stack Web Developer</h2>
					<div class="mt-10">
						{language === "es" ? (
							<p class="text-[#979795]">
								26. Argentino.
								<br />
								En busqueda constante de nuevos desafios.
								<br />
								Me gusta trabajar con personas y ser parte de equipos
								transformadores.
								<br />
								En mi tiempo libre, disfruto de la naturaleza, el surf y la
								buena comida.
							</p>
						) : (
							<p class="text-[#979795]">
								26. Argentino.
								<br />
								Constantly seeking new challenges.
								<br />
								I enjoy working with people and being part of transformative
								teams.
								<br />
								In my free time, I enjoy nature, surfing, and good food.
							</p>
						)}
					</div>
				</div>
				<div class="mt-10 max-[700px]:mt-4 justify-self-end mb-10 flex flex-col items-center">
					<h2 class="text-center">
						<span class="'hover:underline font-medium ml-1 transition-colors text-cyan-950/80 dark:hover:text-cyan-500 hover:text-cyan-700'">
							matiascrino@gmail.com
						</span>
					</h2>
					<div class="flex max-[700px]:flex-col items-center max-[700px]:items-start">
						<div class="flex items-center gap-3">
							{socialmedia.map((socialmedia) => (
								<a
									key={socialmedia.id}
									title={socialmedia.title}
									target="_blank"
									class="dark:text-neutral-500 text-cyan-950/80 hover:dark:text-neutral-700 hover:text-neutral-800"
									href={socialmedia.url}>
									<div class="w-8">
										<svg viewBox="0 0 24 24" fill="none">
											<g id="SVGRepo_iconCarrier">
												<path d={socialmedia.path} fill="currentColor"></path>
											</g>
										</svg>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		);
}

export default Me;