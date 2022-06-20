import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator
const loadGames = () => async (dispatch) => {
	//Fetch AXIOS
	const popularData = await axios.get(popularGamesURL(), {
		params: {
			key: process.env.vgKey,
		},
	});

	const upcomingData = await axios.get(upcomingGamesURL(), {
		params: {
			key: process.env.vgKey,
		},
	});

	const newGamesData = await axios.get(newGamesURL(), {
		params: {
			key: process.env.vgKey,
		},
	});

	//Dispatch Action
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export default loadGames;
