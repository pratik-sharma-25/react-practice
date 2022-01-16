import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	return <div>{song && song.title}</div>;
};

const mapStateToProps = ({ selectedSong }) => {
	return { song: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
