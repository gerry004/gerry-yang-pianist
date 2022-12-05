import AudioPlayer from "./AudioPlayer";
function HeroText() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1>Hi there, I'm Gerry!</h1>
			<h2>Pianist, Piano Teacher.</h2>
			<p>DipLCM, LTCL</p>
		</div>
	)
}

function Hero() {
	return (
		<section className="flex flex-row h-screen justify-center gap-16 bg-yellow-100">
			<HeroText />
			<AudioPlayer />
		</section>
	)
}

export default Hero;