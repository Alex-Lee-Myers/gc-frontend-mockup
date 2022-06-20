import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import gamesReducer from "./reducers/GamesReducer";
import detailReducer from "./reducers/DetailReducer";

const rootReducer = combineReducers({
	games: gamesReducer,
	detail: detailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
