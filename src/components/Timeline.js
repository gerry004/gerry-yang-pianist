import TIMELINE_OBJECTS from '../content/timelineObjects';
import PianoSidebar from './PianoSidebar';
import useIntersectionObserver from '../custom hooks/useIntersectionObserver';

function TimelineContent(props) {
	const image = props.image ? <img src={props.image} alt={props.title} className="min-w-full rounded-t-lg"></img> : "";
	return (
		<div id={props.id} className="gyp__timeline-content-initial bg-yellow-100 rounded-lg border-black border-2 mb-4">
			{image}
			<div className="px-8 py-6">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium md:my-3">{props.title}</h2>
				<p className="italic mb-2">{props.date}</p>
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
			<TimelineContent key={index} id={index + 1} title={object.title} content={object.content} image={object.image} date={object.date} />
		)
	})

	return (
		<section className="max-w-screen py-8 px-3 md:m-16">
			<h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-bold block md:my-3">12 Years of Music Making</h1>
			<h2 className="text-center text-xl sm:text-3xl md:text-4xl font-medium md:my-3 mt-6 mb-8 mx-4 sm:mb-10 md:mb-14">Here are the highlights, achievements, and successes I'm proud of!</h2>
			<div className="sm:flex flex-row justify-evenly gap-8">
				<div className="sm:w-[40%]">
					<PianoSidebar />
				</div>
				<div className="sm:w-[60%] perspective-1000">
					{timeline}
				</div>
			</div>
		</section>
	)
}

export default Timeline;