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
//? .env variables were not working with Axios. Listing manually for now. May need to find a fix at later date.

//Base URL
const base_url = `https://api.rawg.io/api/`;

//Popular Games
const popular_games = `games?key=df44616f52704b65ad1b1a04c5a21db5&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const popularGamesURL = () => base_url + popular_games;

export default popularGamesURL;
