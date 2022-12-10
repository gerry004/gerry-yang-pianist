import { useEffect, useRef, useReducer } from "react";
import { INITIAL_STATE, ACTIONS, audioPlayerReducer } from "../reducers/audioPlayerReducer";
import AUDIO_OBJECTS from "../content/audioObjects";
import frankMaher from "../assets/images/frank-maher-standing.jpg";

function AudioPlayer() {
	const [state, dispatch] = useReducer(audioPlayerReducer, INITIAL_STATE);
	const audio = useRef();
	const slider = useRef();
	const image = useRef();
	const isMounted = useRef(false);

	useEffect(() => {
		audio.current.onloadedmetadata = () => {
			dispatch({type: ACTIONS.setDuration, payload: audio})
		}
		const timer = setInterval(() => {
			dispatch({type: ACTIONS.setCurrentTime, payload: audio})
		}, 1000);
		return () => clearInterval(timer);
	}, [])

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
		}
		else {
			dispatch({ type: ACTIONS.play, payload: { audio: audio, image: image }})
			dispatch({ type: ACTIONS.setDuration, payload: audio })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currentAudio]);

	const changeSlider = () => {
		audio.current.currentTime = slider.current.value;
		dispatch({type: ACTIONS.setCurrentTime, payload: audio})
	}

	return (
		<div className="flex justify-center items-center perspective-1000 my-10 md:m-0">
			<div className={`gyp__audio-player-3d ${!state.isPlaying? "gyp__audio-player-rotations": ""} max-w-sm bg-white border-zinc-800 border-8 shadow-lg flex flex-col justify-center items-center p-4`}>
				<span className="bg-black text-white font-bold text-center h-1/6 w-1/2 block -mt-4 mb-2 rounded-br-lg rounded-bl-lg">ooo</span>
				<audio ref={audio} preload="metadata" src={state.currentAudio.audio}></audio>
				<img ref={image} src={frankMaher} alt="Frank Maher Standing" className="gyp__image-3d max-w-full m-3"></img>
				<p className="text-center">{state.currentAudio.composer} - {state.currentAudio.title}</p>
				<input ref={slider} type="range" min="0" max={state.durationSeconds} value={state.currentSeconds} onChange={changeSlider} className="gyp__range-slider w-2/3 mt-2"></input>
				<div className="flex flex-row w-2/3">
					<span className="justify-start">{state.currentTime}</span>
					<span className="ml-auto">{state.duration}</span>
				</div>
				<div className="flex flex-row">
					<svg onClick={() => { dispatch({ type: ACTIONS.playPrevious, payload: audio, audioObjects: AUDIO_OBJECTS }) }} className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-none hover:fill-slate-300 ${state.disabledPrevious ? "text-gray-600" : "text-black"}`} mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
					</svg>
					{state.isPlaying === true &&
						<svg onClick={() => { dispatch({ type: ACTIONS.pause, payload: { audio: audio, image: image }}) }} className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					}
					{state.isPlaying === false &&
						<svg onClick={() => { dispatch({ type: ACTIONS.play, payload: { audio: audio, image: image }}) }} className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
						</svg>
					}
					<svg onClick={() => { dispatch({ type: ACTIONS.playNext, payload: audio, audioObjects: AUDIO_OBJECTS }) }} className={`h-10 w-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-none hover:fill-slate-300 ${state.disabledNext ? "text-gray-600" : "text-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default AudioPlayer;