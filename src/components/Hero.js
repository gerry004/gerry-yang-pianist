import AudioPlayer from "./AudioPlayer";
function HeroText() {
	return (
		<div className="flex flex-col justify-center text-center">
			<h1 className="text-5xl mt-4 sm:text-6xl md:text-7xl font-bold block md:my-3">Gerry Yang</h1>
			<h2 className="text-xl mt-4 mb-2 sm:text-3xl md:text-4xl font-medium md:my-3">Pianist, Piano Teacher, Accompanist | DipLCM, LTCL</h2>
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