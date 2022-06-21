import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
//Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
	const { game, screen } = useSelector((state) => state.detail);
	return (
		<div className="card-shadow">
			<div className="detail">
				<div className="stats">
					<div className="rating">
						<h3>{game.name}</h3>
						<p>Rating: {game.rating}</p>
					</div>
				</div>
				<div className="info">
					<h3>Platforms</h3>

					<div className="platforms">
						{game &&
							game.platforms?.map((platform) => (
								<h3 key={platform.platform.id}>{platform.platform.name}</h3>
							))}
					</div>
				</div>
				<div className="screenshot">
					<h3>Screenshots</h3>

					<div className="screenshots">
						{screen &&
							screen.results.map((screens) => (
								<img key={screens.id} src={screens.image} alt={game.name} />
							))}
					</div>
				</div>

				<div className="media">
					<img src={game.background_image} alt={game.name} />
				</div>
			</div>
		</div>
	);
};

// {/* A JSX comment */}

export default GameDetail;
