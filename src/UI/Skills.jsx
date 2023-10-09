import icons from '../assets/icons'

const Skills = () => {

    return (
			<>
				<div class="h-full p-2 lg:p-10">
					<h1 class=" text-orange-800 text-2xl font-bold mb-5 text-center lg:text-left">Habilidades</h1>
					<div class="grid grid-cols-4 w-full gap-10 justify-items-center p-5 lg:px-20 lg:pt-10">
						{icons.map((icon) => (
							<figure
								key={icon.id}
								title="HTML"
								class="hover:opacity-50 hover:scale-125">
								<div class="w-16 mx-3" key={icon.id}>
									<svg
										key={icon.id}
										fill="currentColor"
										viewBox="0 0 32 32"
										name={icon.name}
										xmlns="http://www.w3.org/2000/svg">
										<path d={icon.path}></path>{" "}
									</svg>
								</div>
							</figure>
						))}
					</div>
				</div>
			</>
		);
}

export default Skills;