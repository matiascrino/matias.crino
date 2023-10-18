import React, { useEffect, useState, useContext } from 'react'
import Modal from 'react-modal';
import { useUiStore } from '../hooks/index.js';
import experiences from '../data/experience.json'
import { LanguageContext } from '../context/LanguageContext.jsx';

const customStyles = {
	content: {
        width: "90%",
        height: "90vh",
	},
};

Modal.setAppElement('#root');

export const ExperienceModal = () => {

    const { isDateModalOpen, experienceId, closeDateModal} = useUiStore();
    const [experience, setExperience] = useState({});
    const { language } = useContext(LanguageContext);

    const onCloseModal = () => {
        closeDateModal();
    }

    useEffect(() => {
        if(experienceId !== 0){
            setExperience(
                experiences.find((experience) => experience.id === experienceId)
            );
        }
    }, [experienceId]);

    return (
			<Modal
				isOpen={isDateModalOpen}
				onRequestClose={onCloseModal}
				style={customStyles}
				className="modal bg-white rounded-md shadow-lg mx-auto p-6 w-11/12 md:w-4/5 lg:w-3/4 max-h-3/4 relative overflow-auto">
				{language === "es" ? (
					<>
						<h1 class="text-2xl font-semibold text-emerald-800 mb-2">
							{experience.company}
						</h1>
						<h2 class="text-xl font-medium text-emerald-900">
							{experience.title}
						</h2>
						<p class="text-[#979795] my-2">{experience.spanishPeriod}</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Descripción del puesto: </span>
							{experience.spanishDescription}
						</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Logros Destacados: </span>
							{experience.spanishAchievement}
						</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Aptitudes adquiridas: </span>
							{experience.spanishSkills}
						</p>
					</>
				) : (
					<>
						<h1 class="text-2xl font-semibold text-emerald-800 mb-2">
							{experience.company}
						</h1>
						<h2 class="text-xl font-medium text-emerald-900">
							{experience.title}
						</h2>
						<p class="text-[#979795] my-2">{experience.period}</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Job Description: </span>
							{experience.englishDescription}
						</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Outstanding achievements: </span>
							{experience.englishAchievement}
						</p>
						<p class="text-[#979795] my-4">
							<span class="font-semibold">Acquired skills: </span>
							{experience.englishSkills}
						</p>
					</>
				)}
			</Modal>
		);
}
