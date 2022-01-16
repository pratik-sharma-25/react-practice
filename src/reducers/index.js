import { combineReducers } from "redux";

const songReducer = () => {
	return [
		{
			title: "jackson",
			duration: "2:20"
		},
		{
			title: "jackson2",
			duration: "2:30"
		},
		{
			title: "jackson4",
			duration: "2:50"
		},
		{
			title: "jackson7",
			duration: "3:20"
		}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
