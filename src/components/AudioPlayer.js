import { useEffect, useRef, useReducer } from "react";
import { INITIAL_STATE, AUDIO_OBJECTS, audioPlayerReducer } from "../reducers/audioPlayerReducer";

function AudioPlayer() {
	const [state, dispatch] = useReducer(audioPlayerReducer, INITIAL_STATE);
	const audio = useRef();
	const slider = useRef();
	const isMounted = useRef(false);

	useEffect(() => {
		audio.current.onloadedmetadata = () => {
			dispatch({type: "SET_DURATION", payload: audio})
		}
		const timer = setInterval(() => {
			dispatch({type: "SET_CURRENT_TIME", payload: audio})
		}, 1000);
		return () => clearInterval(timer);
	}, [])

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
		}
		else {
			dispatch({ type: "PLAY", payload: audio })
			dispatch({ type: "SET_DURATION", payload: audio })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currentAudio]);

	const changeSlider = () => {
		audio.current.currentTime = slider.current.value;
		dispatch({type: "SET_CURRENT_TIME", payload: audio})
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center border-black border-2">
			<div className="border-black border-2 shadow-lg flex flex-col justify-center items-center w-1/3">
				<audio ref={audio} preload="metadata" src={state.currentAudio.audio}></audio>
				<p>{state.currentAudio.composer} - {state.currentAudio.title}</p>
				<input ref={slider} type="range" min="0" max={state.durationSeconds} value={state.currentSeconds} onChange={changeSlider} className="w-1/2"></input>
				<div className="flex flex-row w-1/2">
					<p className="justify-start">{state.currentTime}</p>
					<p className="ml-auto">{state.duration}</p>
				</div>
				<div className="flex flex-row">
					<svg onClick={() => { dispatch({ type: "PLAY_PREVIOUS", payload: audio, audioObjects: AUDIO_OBJECTS }) }} className={`w-12 h-12 fill-none hover:fill-slate-300 ${state.disabledPrevious ? "text-gray-600" : "text-black"}`} mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
					</svg>
					{state.isPlaying === true &&
						<svg onClick={() => { dispatch({ type: "PAUSE", payload: audio }) }} className="w-12 h-12 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					}
					{state.isPlaying === false &&
						<svg onClick={() => { dispatch({ type: "PLAY", payload: audio }) }} className="w-12 h-12 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
						</svg>
					}
					<svg onClick={() => { dispatch({ type: "PLAY_NEXT", payload: audio, audioObjects: AUDIO_OBJECTS }) }} className={`w-12 h-12 fill-none hover:fill-slate-300 ${state.disabledNext ? "text-gray-600" : "text-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default AudioPlayer;