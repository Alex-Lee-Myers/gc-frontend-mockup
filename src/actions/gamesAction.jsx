import axios from "axios";
import popularGamesURL from "../api";

//Action Creator
const loadGames = () => async (dispatch) => {
	//Fetch AXIOS
	const popularData = await axios.get(popularGamesURL(), {
		params: {
			key: process.env.vgKey,
		},
	});
	//Dispatch Action
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};

export default loadGames;
