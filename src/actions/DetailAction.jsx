import axios from "axios";
import { gameDetailsURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
	const detailData = await axios.get(gameDetailsURL(id));
	// const screenshotData = await axios.get(gameScreenshotsURL(id));
	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
		},
	});
};

export default loadDetail;
