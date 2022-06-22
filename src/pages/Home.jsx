import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadGames from "../actions/GamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import {
	motion,
	AnimatePresence,
	AnimateSharedLayout,
} from "framer-motion/dist/framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];

	useEffect(() => {
		if (!pathId) {
			document.body.style.overflow = "auto";
		}
		dispatch(loadGames());
	}, [dispatch, pathId]);

	// Get the data back
	const { popular, upcoming, newGames } = useSelector((state) => state.games);
	console.log(GameDetail.name);

	return (
		<GameList>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathId && GameDetail.name && <GameDetail pathId={pathId} />}
				</AnimatePresence>

				<h2>Upcoming Games</h2>
				<Games>
					{upcoming &&
						upcoming.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
				</Games>

				<h2>Popular Games</h2>
				<Games>
					{popular &&
						popular.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
				</Games>

				<h2>New Games</h2>
				<Games>
					{newGames &&
						newGames.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								key={game.id}
								image={game.background_image}
							/>
						))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
		text-align: center;
	}
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		padding: 0px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;
export default Home;
