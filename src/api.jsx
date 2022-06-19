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
const vgKey = `${process.env.vgKey}`;

//Base URL
const base_url = `https://api.rawg.io/api`;

//Popular Games
const popular_games = `games?key=${vgKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}/${popular_games}`;
