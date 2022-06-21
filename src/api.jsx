//! All things dates!
// Getting the current month
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// Getting the current day (##)
const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//! API Calls
// getting API key
require("dotenv").config();

//Base URL
const base_url = `https://api.rawg.io/api/`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = () => base_url + popular_games;
const upcomingGamesURL = () => base_url + upcoming_games;
const newGamesURL = () => base_url + new_games;

//! Game Details
const gameDetailsURL = (game_id) =>
	`${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

const gameScreenshotsURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;

export {
	base_url,
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	gameDetailsURL,
	gameScreenshotsURL,
	currentDate,
	lastYear,
	nextYear,
};
