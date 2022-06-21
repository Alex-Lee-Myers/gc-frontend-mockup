import { combineReducers } from "redux";
import { gamesReducer } from "./GamesReducer";
import { detailReducer } from "./DetailReducer";

const rootReducer = combineReducers({
	games: gamesReducer,
	detail: detailReducer,
});

export default rootReducer;
