import brahmsSonata from '../assets/audio/brahms-sonata.mp3';
import chopinRevolutionary from '../assets/audio/chopin-revolutionary.mp3';
import lisztRigoletto from '../assets/audio/liszt-rigoletto.MOV.mp3';

const INITIAL_STATE = {
	isPlaying: false,
	currentAudio: {
		audio: brahmsSonata,
		title: "Sonata No.1 First Movement",
		composer: "Brahms"
	},
	currentIndex: 0,
	disabledPrevious: true,
	disabledNext: false,
	duration: "",
	currentTime: "00:00",
	currentSeconds: 0,
	durationSeconds: 0
}

const AUDIO_OBJECTS = [
	{
		audio: brahmsSonata,
		title: "Sonata No.1 First Movement",
		composer: "Brahms"
	},
	{
		audio: lisztRigoletto,
		title: "Rigoletto Paraphrase",
		composer: "Liszt"
	},
	{
		audio: chopinRevolutionary,
		title: "Etude Op.10 No.12 'Revolutionary'",
		composer: "Chopin"
	}];

function audioPlayerReducer(state, action) {
	switch (action.type) {
		case "PLAY":
			action.payload.current.play();
			return {
				...state,
				isPlaying: true
			}
		case "PAUSE":
			action.payload.current.pause();
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
export { INITIAL_STATE, AUDIO_OBJECTS, audioPlayerReducer }