import {LANGUAGE} from '../actions/language'
export const lan={fa:{name:"fa",direction:"rtl"},en:{name:"en",direction:"ltr"}}
const  language= (state = lan.en, action) => {
	switch (action.type) {
		case LANGUAGE: {
			return {
				...lan[action.payload]
			};
		}
		default:
			return { ...state };
	}
};

export {language}