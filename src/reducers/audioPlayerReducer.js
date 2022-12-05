import AUDIO_OBJECTS from '../content/audioObjects';

const INITIAL_STATE = {
	isPlaying: false,
	currentAudio: AUDIO_OBJECTS[0],
	currentIndex: 0,
	disabledPrevious: true,
	disabledNext: false,
	duration: "",
	currentTime: "00:00",
	currentSeconds: 0,
	durationSeconds: 0
}

const ACTIONS = {
	play: "PLAY",
	pause: "PAUSE",
	playNext: "PLAY_NEXT",
	playPrevious: "PLAY_PREVIOUS",
	setDuration: "SET_DURATION",
	setCurrentTime: "SET_CURRENT_TIME"
}

function audioPlayerReducer(state, action) {
	switch (action.type) {
		case "PLAY":
			action.payload.audio.current.play();
			action.payload.image.current.classList.add("gyp__image-scale-up")
			return {
				...state,
				isPlaying: true
			}
		case "PAUSE":
			action.payload.audio.current.pause();
			action.payload.image.current.classList.remove("gyp__image-scale-up");
			return {
				...state,
				isPlaying: false
			}
		case "PLAY_NEXT":
			if (state.disabledNext === true) {
				return {...state}
			}
			action.payload.current.pause();
			const nextIndex = state.currentIndex + 1;
			if (nextIndex === AUDIO_OBJECTS.length - 1) {
				return {
					...state,
					currentIndex: nextIndex,
					disabledNext: true,
					currentAudio: AUDIO_OBJECTS[nextIndex],
					isPlaying: false
				}
			}
			return {
				...state,
				disabledPrevious: false,
				disabledNext: false,
				currentIndex: nextIndex,
				currentAudio: AUDIO_OBJECTS[nextIndex],
				isPlaying: false
			}
		case "PLAY_PREVIOUS":
			if (state.disabledPrevious === true) {
				return {...state}
			}
			action.payload.current.pause();
			const previousIndex = state.currentIndex - 1;
			if ((previousIndex) === 0) {
				return {
					...state,
					disabledPrevious: true,
					currentIndex: previousIndex,
					currentAudio: AUDIO_OBJECTS[previousIndex],
					isPlaying: false
				}
			}
			else {
				return {
					...state,
					disabledPrevious: false,
					disabledNext: false,
					currentIndex: previousIndex,
					currentAudio: AUDIO_OBJECTS[previousIndex],
					isPlaying: false
				}
			}
		case "SET_DURATION":
			const totalDurationInSeconds = action.payload.current.duration;
			let durationMinutes = Math.floor(totalDurationInSeconds / 60);
			let durationSeconds = Math.round(totalDurationInSeconds - durationMinutes * 60);
			if (durationMinutes < 10) {
				durationMinutes = "0" + durationMinutes;
			}
			if (durationSeconds < 10) {
				durationSeconds = "0" + durationSeconds;
			}
			return {
				...state,
				duration: durationMinutes + ":" + durationSeconds,
				durationSeconds: totalDurationInSeconds
			}
		case "SET_CURRENT_TIME":
			const timeInSeconds = action.payload.current.currentTime;
			let currentTimeMinutes = Math.floor(timeInSeconds / 60);
			let currentTimeSeconds = Math.round(timeInSeconds - currentTimeMinutes * 60);
			if (currentTimeMinutes < 10) {
				currentTimeMinutes = "0" + currentTimeMinutes;
			}
			if (currentTimeSeconds < 10) {
				currentTimeSeconds = "0" + currentTimeSeconds;
			}
			return {
				...state,
				currentTime: currentTimeMinutes + ":" + currentTimeSeconds,
				currentSeconds: timeInSeconds
			}
		default:
			console.log("default");
	}

}
export { INITIAL_STATE, ACTIONS, audioPlayerReducer }