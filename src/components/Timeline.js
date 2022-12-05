import { useEffect } from 'react';
import TIMELINE_OBJECTS from '../content/timelineObjects';
import PianoSidebar from './PianoSidebar';

function TimelineContent(props) {
	return (
		<div>
			<h1 id={props.id}>{props.title}</h1>
			<p>{props.content}</p>
		</div>
	)
}

function Timeline() {

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const buttonId = "piano-key-" + entry.target.id;
					const buttonElement = document.getElementById(buttonId);
					buttonElement?.classList.add("text-4xl");
				}
				if (!entry.isIntersecting) {
					const buttonId = "piano-key-" + entry.target.id;
					const buttonElement = document.getElementById(buttonId);
					buttonElement?.classList.remove("text-4xl");
				}
			})
		}, []);
		
		const titles = document.querySelectorAll("h1");
		titles.forEach((title) => {
			observer.observe(title);
		})
	}, [])

	const timeline = TIMELINE_OBJECTS.map((object, index) => {
		return (
			<TimelineContent key={index} id={index + 1} title={object.title} content={object.content} />
		)
	})

	return (
		<div className="flex flex-row m-20">
			<PianoSidebar />
			<div className="w-2/3 border-black border-2">
				{timeline}
			</div>
		</div>
	)
}

export default Timeline;