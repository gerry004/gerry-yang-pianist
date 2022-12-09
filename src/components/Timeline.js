import TIMELINE_OBJECTS from '../content/timelineObjects';
import PianoSidebar from './PianoSidebar';
import useIntersectionObserver from '../custom hooks/useIntersectionObserver';

function TimelineContent(props) {
	return (
		<div id={props.id} className="gyp__timeline-content-initial bg-yellow-100 rounded-lg border-black border-2 mb-4 max-w-[60%] ml-10">
			<img src={props.image} alt={props.title} className="min-w-full rounded-t-lg"></img>
			<div className="px-8 pb-6">
			<h2>{props.title}</h2>
			<span>{props.date}</span>
			<p>{props.content}</p>
			</div>
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
			<TimelineContent key={index} id={index + 1} title={object.title} content={object.content} image={object.image} date={object.date}/>
		)
	})

	return (
		<section className="m-20">
			<h1 className="text-center m-12">12 Years of Music Making</h1>
			<h2 className="text-center m-12">Lorem Ipsum Dolor Subtitle text!</h2>
			<div className="flex flex-row gap-4">
				<div className="w-[40%]">
					<PianoSidebar />
				</div>
				<div className="w-[60%]">
					{timeline}
				</div>
			</div>
		</section>
	)
}

export default Timeline;