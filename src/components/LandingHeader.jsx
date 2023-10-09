

const LandingHeader = () => {   

    return (
			<header class=" py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40">
				<nav class="flex flex-grow justify-end basis-0">
					<ul class="flex text-sm [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2x">
						<li>
							<a href="">ENG</a>
						</li>
						<li>
							<a href=""> | </a>
						</li>
						<li>
							<a href="">SPA</a>
						</li>
					</ul>
				</nav>
			</header>
		);
}

export default LandingHeader;
