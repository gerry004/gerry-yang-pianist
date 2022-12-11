import TIMELINE_OBJECTS from "../content/timelineObjects";

function PianoKey(props) {
	const { id, contentId, colour, content } = props;

	const goTo = () => {
		window.scrollTo({
			top: document.getElementById(contentId).offsetTop - document.querySelector("nav").offsetHeight,
			behavior: "smooth"
		})
	}

	return (
		<button id={id} onClick={goTo} className={`gyp__piano-key-${colour}`}>
			{content}
		</button>
	)
}

function PianoSidebar() {
	const piano = TIMELINE_OBJECTS.map((object, index) => {
		switch (index + 1) {
			case 2:
			case 4:
			case 7:
			case 9:
			case 11:
			case 14:
			case 16:
			case 19:
				return (
					<PianoKey
						key={index}
						id={`piano-key-${index + 1}`}
						contentId={index + 1}
						colour="black"
						content={object.pianoKeyContent}
					></PianoKey>
				)
			default:
				return (
					<PianoKey
						key={index}
						id={`piano-key-${index + 1}`}
						contentId={index + 1}
						colour="white"
						content={object.pianoKeyContent}
					></PianoKey>
				)

		}
	})
	return (
		<div className="hidden gyp__piano-sidebar-3d sm:grid grid-cols-4 sticky top-20">
			{piano}
		</div>
	)
}
export default PianoSidebar;