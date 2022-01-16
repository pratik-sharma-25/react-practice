import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
	return (
		<div className="ui divided list">
			{songs.map(song => {
				return (
					<div className="item" key={song.title}>
						<div className="right floated content">
							<button
								onClick={() => selectSong(song)}
								className="ui button primary"
							>
								Select
							</button>
						</div>
						<div className="content">{song.title}</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	console.log(state);
	return {
		songs: state.songs
	};
};

const mapDispatchToProps = () => {
	return {
		selectSong
	};
};

export default connect(mapStateToProps, mapDispatchToProps())(SongList);