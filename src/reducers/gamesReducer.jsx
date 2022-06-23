const initState = {
	popular: [],
	upcoming: [],
	newGames: [],
	search: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return {
				...state,
				popular: action.payload.popular,
				upcoming: action.payload.upcoming,
				newGames: action.payload.newGames,
			};
		case "FETCH_SEARCHED":
			return {
				...state,
				search: action.payload.searched,
			};
		case "CLEAR_SEARCH":
			return {
				...state,
				search: [],
			};
		default:
			return state;
	}
};

export default gamesReducer;
