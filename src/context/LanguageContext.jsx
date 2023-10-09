import React, { createContext, useReducer } from "react";

export const LanguageContext = createContext();

function languageReducer(state, action){
    switch (action.type) {
            case "es":
                return "es";
            case "en":
                return "en";
            default:
                return state;
        }
}


export const LanguageProvider = ({ children }) => {
    const [language, dispatch] = useReducer(languageReducer, "en");
    

	const value = { language, dispatch };

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};
