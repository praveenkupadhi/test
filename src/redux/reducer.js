import { SEARCH_DATA_ADD, SEARCH_DATA_FETCH } from "./actionTypes";

const init = {
	data: "",
	matchData: [],
};

export const Reducer = (store = init, action) => {
	switch (action.type) {
		case SEARCH_DATA_ADD:
			return { ...store, data: action.payload };
		case SEARCH_DATA_FETCH:
			return { ...store, matchData: action.payload };
		default:
			return { ...store };
	}
};
