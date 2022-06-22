import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = (pathId) => {
	const navigate = useNavigate();
	//Exit Detail View
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("exit-detail")) {
			document.body.style.overflow = "auto";
			navigate("/");
		}
	};
	const { game, screen, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className="exit-detail" onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>

							<Info>
								<h3>Platforms</h3>

								<Platforms>
									{game &&
										game.platforms?.map((platform) => (
											<h3 key={platform.platform.id}>
												{platform.platform.name}
											</h3>
										))}
								</Platforms>
							</Info>
						</Stats>

						<Media>
							<motion.img
								layoutId={`image ${pathId}`}
								src={smallImage(game.background_image, 1920)}
								alt={game.name}
								loading="lazy"
							/>
						</Media>

						<Description>
							<p>{game.description_raw}</p>
						</Description>

						<div className="screenshot">
							<h3>Screenshots</h3>

							<div className="screenshots">
								{screen &&
									screen.results.map((screens) => (
										<img
											key={screens.id}
											src={smallImage(screens.image, 640)}
											alt={game.name}
											loading="lazy"
										/>
									))}
							</div>
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

// {/* A JSX comment */}
// Styled Components
const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 20rem;
	background: white;
	position: absolute;
	left: 10%;
	padding: 5rem;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0 rem;
`;

export default GameDetail;
