import TIMELINE_OBJECTS from "../content/timelineObjects";

function PianoKey(props) {
	return (
			<button id={props.id} className={`gyp__piano-key-${props.colour}`}>
					{props.content}
			</button>
	)
}

function PianoSidebar() {
	const piano = TIMELINE_OBJECTS.map((object, index) => {
		switch (index + 1) {
			case 1:
			case 3:
			case 5:
			case 6:
			case 8:
			case 10:
				return (
					<PianoKey
						key={index}
						id={`piano-key-${index + 1}`}
						colour="white"
						content={object.pianoKeyContent}
					></PianoKey>
				)
			case 2:
			case 4:
			case 7:
			case 9:
				return (
					<PianoKey
						key={index}
						id={`piano-key-${index + 1}`}
						colour="black"
						content={object.pianoKeyContent}
					></PianoKey>
				)
			default:
				return <p>Out of Scope</p>

		}
	})
	return (
		<div className="w-1/3">
			<div className="grid grid-cols-4 sticky top-0">
				{piano}
			</div>
		</div>
	)
}
export default PianoSidebar;