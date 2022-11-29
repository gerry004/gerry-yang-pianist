import { useEffect, useState, useRef } from "react";
import brahmsSonata from './assets/audio/brahms-sonata.mp3';
import chopinRevolutionary from './assets/audio/chopin-revolutionary.mp3';
import lisztRigoletto from './assets/audio/liszt-rigoletto.MOV.mp3';

function AudioPlayer() {
	const recordings = [
		{
			audio: brahmsSonata,
			title: "Sonata No.1 First Movement",
			composer: "Brahms"
		},
		{
			audio: lisztRigoletto,
			title: "Etude Op.10 No.3 'Tristesse'",
			composer: "Chopin"
		},
		{
			audio: chopinRevolutionary,
			title: "Etude Op.10 No.12 'Revolutionary'",
			composer: "Chopin"
		}];

	const isMounted = useRef(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [disabledPrevious, setDisabledPrevious] = useState(true);
	const [disabledNext, setDisabledNext] = useState(false);

	const [duration, setDuration] = useState("00:00");
	const [currentTime, setCurrentTime] = useState("00:00");
	const [currentSeconds, setCurrentSeconds] = useState(0);
	const [durationSeconds, setDurationSeconds] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			const duration = document.getElementById("audio").duration;
			const durationMinutes = Math.floor(duration/60);
			const durationSeconds = Math.round(duration - durationMinutes*60);
			setDurationSeconds(duration);
			setDuration(durationMinutes + ":" + durationSeconds);

			const currentTime = document.getElementById("audio").currentTime;
			const minutes = Math.floor(currentTime / 60);
			const seconds = Math.round(currentTime - minutes*60);
			setCurrentSeconds(currentTime);
			setCurrentTime(minutes + ":" + seconds);
		}, 1000);
		return () => clearInterval(timer);
	});

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
		}
		else {
			playAudio();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	const playAudio = () => {
		const audio = document.getElementById("audio");
		audio.play();
		setIsPlaying(true);
	}
	const pauseAudio = () => {
		const audio = document.getElementById("audio");
		audio.pause();
		setIsPlaying(false);
	}
	const playNext = () => {
		pauseAudio();
		if (currentIndex < recordings.length - 1) {
			setDisabledNext(false);
			setDisabledPrevious(false);
			setCurrentIndex((prevState) => prevState + 1);
		} else {
			setDisabledNext(true);
		}
	}
	const playPrevious = () => {
		pauseAudio();
		if (currentIndex > 0) {
			setDisabledPrevious(false);
			setDisabledNext(false);
			setCurrentIndex((prevState) => prevState - 1);
		} else {
			setDisabledPrevious(true);
		}
	}
	const changeSlider = ()=> {
		document.getElementById("audio").currentTime = document.getElementById("slider").value;
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center border-black border-2">
			<div className="border-black border-2 shadow-lg flex flex-col justify-center items-center w-1/3">
				<audio src={recordings[currentIndex].audio} id="audio"></audio>
				<p>{recordings[currentIndex].composer} - {recordings[currentIndex].title}</p>
				<input type="range" min="0" max={durationSeconds} value={currentSeconds} onChange={changeSlider} id="slider" className="w-1/2"></input>
				<div className="flex flex-row w-1/2">
					<p className="justify-start">{currentTime}</p>
					<p className="ml-auto">{duration}</p>
				</div>
				<div className="flex flex-row">
					<svg onClick={playPrevious} className={`w-12 h-12 fill-none hover:fill-slate-300 ${disabledPrevious ? "text-gray-600" : "text-black"}`} mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
					</svg>
					{isPlaying === true &&
						<svg onClick={pauseAudio} className="w-12 h-12 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					}
					{isPlaying === false &&
						<svg onClick={playAudio} className="w-12 h-12 fill-none hover:fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
						</svg>
					}
					<svg onClick={playNext} className={`w-12 h-12 fill-none hover:fill-slate-300 ${disabledNext ? "text-gray-600" : "text-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default AudioPlayer;