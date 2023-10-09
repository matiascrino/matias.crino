import socialmedia from '../assets/socialmedia.json'
import projects from '../assets/projects.json'

const Projects = () => {
    return (
			<div class="h-full p-2 lg:p-10">
				<h1 class=" text-orange-800 text-2xl font-bold text-center lg:text-left">
					Proyectos
				</h1>
				{projects.map((project) => (
					<article
						class="flex items-center rounded-lg hover:bg-black hover:bg-opacity-5 hover:shadow-2xl p-5"
						key={project.id}>
						<img
							src={project.image}
							alt=""
							class="w-1/4 h-auto mr-20 hidden lg:block rounded-lg"
						/>
						<div class="text-left flex flex-col">
							<h1 class="text-2xl font-semibold mb-2  text-orange-800">
								{project.title}
							</h1>

							<p class="text-sm mb-4 text-[#696965]">
								{project.spanishDescription}
							</p>
							<div class="flex space-x-4">
								<a
									key={socialmedia[0].id}
									title={socialmedia[0].title}
									target="_blank"
									class="flex items-center space-x-2 hover:bg-black hover:bg-opacity-5 hover:shadow-2xl rounded-lg hover:p-1"
									href={project.github}>
									<div class="w-8">
										<svg viewBox="0 0 24 24" fill="none">
											<g id="SVGRepo_iconCarrier">
												<path
													d={socialmedia[0].path}
													fill="currentColor"></path>
											</g>
										</svg>
									</div>
									<p class="text-orange-900/80">GitHub</p>
								</a>
								{project.deploy !== "" && (
									<a
										key={socialmedia[0].id}
										title="Heroku"
										target="_blank"
										class="flex items-center space-x-2 hover:bg-black hover:bg-opacity-5 hover:shadow-2xl rounded-lg hover:p-1"
										href="https://mern-app-calendar-7b6c88e4145d.herokuapp.com/">
										<p class="text-orange-900/80">Heroku</p>
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		);
}

export default Projects;

