import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const AboutMe = () => {

	const {language} = useContext(LanguageContext);

    return (
			<>
				{language === "es" ? (
					<div class="h-full p-2 lg:p-10">
						<h1 class="mb-8 text-orange-800 text-2xl font-bold text-center lg:text-left">
							Mi Historia
						</h1>
						<p class="pb-4 text-[#696965]">
							Como Ingeniero Industrial, tuve la increíble oportunidad de
							trabajar en diversas áreas de grandes empresas de consumo masivo.
							Trabajé en marketing, ventas, data analytics y finanzas, lo que me
							permitió comprender en profundidad el funcionamiento del negocio y
							adquirir valiosas habilidades interdisciplinarias.
						</p>
						<p class="pb-4 text-[#696965]">
							Hace 2 años, tomé la decisión de ampliar mi perfil profesional
							adquiriendo conocimientos en desarrollo de software, con el
							objetivo de implementar soluciones de manera más eficiente.
						</p>
						<p class="pb-4 text-[#696965]">
							En la actualidad, estoy a punto de finalizar mi formación como
							Certified Tech Developer en
							<span class="'hover:underline font-medium ml-1 transition-colors dark:text-orange-50 text-orange-700 dark:hover:text-cyan-500 hover:text-cyan-700'">
								Digital House.
							</span>{" "}
							Impulsado por mi profundo interés en las últimas tendencias
							tecnológicas, decidí dedicarme por completo al desarrollo de
							software como profesional independiente, dando origen a
							<span class="'hover:underline font-medium ml-1 transition-colors dark:text-orange-50 text-orange-700 dark:hover:text-cyan-500 hover:text-cyan-700'">
								OsoñoDevs.
							</span>
						</p>
						<p class="pb-4 text-[#696965]">
							Esta empresa refleja mi pasión por crecer en la industria del
							desarrollo de software y tiene la misión de impulsar la
							transformación empresarial a través de la tecnología. Estoy
							comprometido a seguir aprendiendo y creciendo en este campo, con
							el objetivo de contribuir al desarrollo de soluciones
							tecnológicas.
						</p>
						<p class="pb-4 text-[#696965]">
							Creo firmemente que la tecnología es la clave para fomentar la
							innovación y la eficiencia en cualquier organización. Si buscas
							profesionalismo y dedicación, ¡contá conmigo!
						</p>
					</div>
				) : (
					<div class="h-full p-2 lg:p-10">
						<h1 class="mb-8 text-orange-800 text-2xl font-bold text-center lg:text-left">
							My Story
						</h1>
						<p class="pb-4 text-[#696965]">
							As an Industrial Engineer, I had the incredible opportunity to
							work in various areas of large consumer goods companies. I worked
							in marketing, sales, data analytics, and finance, which allowed me
							to deeply understand how the business operates and acquire
							valuable interdisciplinary skills.
						</p>
						<p class="pb-4 text-[#696965]">
							Two years ago, I made the decision to expand my professional
							profile by gaining knowledge in software development, with the aim
							of implementing solutions more efficiently.
						</p>
						<p class="pb-4 text-[#696965]">
							Currently, I am about to complete my training as a Certified Tech
							Developer at{" "}
							<span class="'hover:underline font-medium ml-1 transition-colors dark:text-orange-50 text-orange-700 dark:hover:text-cyan-500 hover:text-cyan-700'">
								Digital House.
							</span>{" "}
							Driven by my deep interest in the latest technological trends, I
							decided to dedicate myself entirely to software development as an
							independent professional, founding{" "}
							<span class="'hover:underline font-medium ml-1 transition-colors dark:text-orange-50 text-orange-700 dark:hover:text-cyan-500 hover:text-cyan-700'">
								OsoñoDevs.
							</span>
						</p>
						<p class="pb-4 text-[#696965]">
							This company reflects my passion for growing in the software
							development industry and has the mission of driving business
							transformation through technology. I am committed to continuing to
							learn and grow in this field, with the goal of contributing to the
							development of technological solutions.
						</p>
						<p class="pb-4 text-[#696965]">
							I firmly believe that technology is the key to fostering
							innovation and efficiency in any organization. If you are looking
							for professionalism and dedication, count on me!
						</p>
					</div>
				)}
			</>
		);
}

export default AboutMe;