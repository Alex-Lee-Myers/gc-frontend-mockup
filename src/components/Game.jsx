import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/DetailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, id, image, short_screenshots }) => {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id, short_screenshots));
	};

	return (
		<StyledGame onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<h2>{name}</h2>
				<p>{released}</p>
				<img src={image} alt={name} />
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
