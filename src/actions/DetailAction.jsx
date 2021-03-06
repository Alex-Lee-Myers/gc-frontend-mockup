import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
	const detailData = await axios.get(gameDetailsURL(id));
	const screenshotData = await axios.get(gameScreenshotsURL(id));

	dispatch({
		type: "LOADING_DETAIL",
	});

	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenshotData.data,
		},
	});
};

export default loadDetail;
