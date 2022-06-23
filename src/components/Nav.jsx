import React from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import logo from "../img/logo.svg";
// Redux+Routes
import { fetchSearch } from "../actions/GamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = React.useState("");

	const clearSearch = () => {
		setSearch("");
		dispatch({ type: "CLEAR_SEARCH" });
	};

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (search) {
			dispatch(fetchSearch(search));
			setSearch("");
		} else {
			clearSearch();
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			submitHandler(e);
		}
	};

	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearch}>
				<img src={logo} alt="logo" />
				<h1>GameBest</h1>
			</Logo>
			<form onSubmit={submitHandler} className="search">
				<input
					value={search}
					onChange={searchHandler}
					type="text"
					placeholder="Search"
					onKeyDown={handleKeyDown}
				/>
				<button>Search</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		font-weight: bold;
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Nav;
