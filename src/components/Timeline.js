import TIMELINE_OBJECTS from '../content/timelineObjects';
import PianoSidebar from './PianoSidebar';
import useIntersectionObserver from '../custom hooks/useIntersectionObserver';

function TimelineContent(props) {
	return (
		<div id={props.id} className="gyp__timeline-content-initial h-screen">
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<img src={props.image} alt={props.title} className="max-w-xs"></img>
		</div>
	)
}

function Timeline() {
	const scaleUp = (entry) => {
		entry.target.classList.add("gyp__timeline-content-intersect");
		const buttonId = "piano-key-" + entry.target.id;
		const buttonElement = document.getElementById(buttonId);
		buttonElement?.classList.add("gyp__piano-key-pressed");
	}
	const scaleDown = (entry) => {
		const buttonId = "piano-key-" + entry.target.id;
		const buttonElement = document.getElementById(buttonId);
		buttonElement?.classList.remove("gyp__piano-key-pressed");
	}
	
	useIntersectionObserver(".gyp__timeline-content-initial", scaleUp, scaleDown);

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