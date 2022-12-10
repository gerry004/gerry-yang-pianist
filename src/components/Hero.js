import AudioPlayer from "./AudioPlayer";
function HeroText() {
	return (
		<div className="flex flex-col justify-center text-center">
			<h1>Hi there, I'm Gerry!</h1>
			<h2>Pianist, Piano Teacher.</h2>
			<p>DipLCM, LTCL</p>
		</div>
	)
}

function Hero() {
	return (
		<section className="sm:flex sm:justify-evenly md:h-[calc(100vh-64px-64px)]">
			<HeroText />
			<AudioPlayer />
		</section>
	)
}

export default Hero;