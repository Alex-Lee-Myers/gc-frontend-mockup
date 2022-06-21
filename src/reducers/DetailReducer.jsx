const initialState = {
	game: {},
	screen: {
		results: [],
	},
};

const detailReducer = (state = initialState, action) => {
	// console.log(state);
	switch (action.type) {
		case "GET_DETAIL":
			return {
				...state,
				game: action.payload.game,
				screen: action.payload.screen,
			};
		default:
			return { ...state };
	}
};

export default detailReducer;
