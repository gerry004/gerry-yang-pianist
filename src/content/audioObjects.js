import brahmsSonata from '../assets/audio/brahms-sonata.mp3';
import chopinRevolutionary from '../assets/audio/chopin-revolutionary.mp3';
import lisztRigoletto from '../assets/audio/liszt-rigoletto.mp3';
import lisztRhapsody from '../assets/audio/list-hungarian-rhapsody-2.mp3';
import tchaikovskyConcerto from '../assets/audio/tchaik-concerto-1.mp3';
import griegHomesickness from '../assets/audio/grieg-homesickness.mp3';
import mozartConcerto from '../assets/audio/mozart-concerto.mp3';
import rachMomentMusicaux from '../assets/audio/rach-moment-musicaux.mp3';
import schumannAufschwung from '../assets/audio/schumann-aufschwung.mp3';
import schumannDesAbends from '../assets/audio/schumann-des-abends.mp3';
import lisztPaganiniCaprice from '../assets/audio/liszt-paganini-caprice-5.mp3';
import chopinTristesse from '../assets/audio/chopin-etude-10-3.mp3';


const AUDIO_OBJECTS = [
	{
		audio: lisztRigoletto,
		title: "Rigoletto Paraphrase",
		composer: "Liszt"
	},
	{
		audio: lisztRhapsody,
		title: "Hungarian Rhapsody No.2",
		composer: "Liszt"
	},	
	{
		audio: brahmsSonata,
		title: "Sonata No.1 First Movement",
		composer: "Brahms"
	},
	{
		audio: griegHomesickness,
		title: "Homesickness",
		composer: "Grieg"
	},
	{
		audio: lisztPaganiniCaprice,
		title: "Paganini Caprice No.5 'La Chasse'",
		composer: "Liszt"
	},
	{
		audio: mozartConcerto,
		title: "Piano Concerto No.8 in C major 1st Movement",
		composer: "Mozart"
	},
	{
		audio: tchaikovskyConcerto,
		title: "Piano Concerto No.1 3rd Movement",
		composer: "Tchaikovsky"
	},
	{
		audio: schumannDesAbends,
		title: "Fantasiestucke Op.12 'Des Abends'",
		composer: "Schumann"
	},
	{
		audio: schumannAufschwung,
		title: "Fantasiestucke Op.12 'Aufschwung'",
		composer: "Schumann"
	},
	{
		audio: rachMomentMusicaux,
		title: "Moment Musicaux Op.16 No.4",
		composer: "Rachmaninoff"
	},
	{
		audio: chopinTristesse,
		title: "Etude Op.10 No.3 'Tristesse'",
		composer: "Chopin"
	},
	{
		audio: chopinRevolutionary,
		title: "Etude Op.10 No.12 'Revolutionary'",
		composer: "Chopin"
	},
];

export default AUDIO_OBJECTS;