import { useEffect } from 'react';
import TIMELINE_OBJECTS from '../content/timelineObjects';
import PianoSidebar from './PianoSidebar';

function TimelineContent(props) {
	return (
		<div>
			<h2 id={props.id}>{props.title}</h2>
			<p>{props.content}</p>
			<img src={props.image} alt={props.title} className="max-w-xs"></img>
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

		const titles = document.querySelectorAll("h2");
		titles.forEach((title) => {
			observer.observe(title);
		})
	}, [])

	const timeline = TIMELINE_OBJECTS.map((object, index) => {
		return (
			<TimelineContent key={index} id={index + 1} title={object.title} content={object.content} image={object.photo} />
		)
	})

	return (
		<section className="m-20">
			<h1 className="text-center m-12">12 Years of Music Making</h1>
			<div className="flex flex-row gap-4">
				<div className="w-1/3">
					<PianoSidebar />
				</div>
				<div className="w-2/3 border-black border-2 p-8">
					{timeline}
				</div>
			</div>
		</section>
	)
}

export default Timeline;