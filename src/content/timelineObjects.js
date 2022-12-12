import boyle from "../assets/images/boyle.png";
import christopherElton from "../assets/images/christopher-elton.png";
import estonia from "../assets/images/estonia.png";
import feisBiggs from "../assets/images/feis-biggs.png";
import feisGala from "../assets/images/feis-gala.png";
import firstWin from "../assets/images/first-win.png";
import frankMaher from "../assets/images/frank-maher.png";
import nyoi from "../assets/images/nyoi.png";
import dayOne from "../assets/images/day-one.png";
import tudAwards from "../assets/images/tud-awards.png";
import yujaWang from "../assets/images/yuja-wang.png";
import toyShow from "../assets/images/toy-show.png";
import carnegie from "../assets/images/carnegie.png";
import epta from "../assets/images/epta.png";
import arasAnUachtarain from "../assets/images/aras-an-uachtarain.png";

const TIMELINE_OBJECTS = [
    {
        title: "Day One of Piano",
        pianoKeyContent: "Day One",
        date: "September 2010",
        content: "This is where it all began! At the age of 6, I started piano at the DIT Conservatory of Music and Drama. " +
            "For the first year, I learned from Evelyn Healy. For the next 11 years, I studied with Shirin Tobin.",
        image: dayOne
    },
    {
        title: "Winning My First Piano Competition",
        pianoKeyContent: "My First Win",
        date: "March 2014",
        content: "After 4 years of practice and weekly lessons, I entered the DIT Under 10 Solo Competition. " +
            "The competition was open to DIT students under the age of 10, and it was a great way to see how I stacked up against the other kids. " +
            "With no prior expectations, I played Etude Allegro by Nakada as I had practiced, and I managed to win it! " +
            "Pictured above is little me with my medal and the adjudicator!",
        image: firstWin
    },
    {
        title: "The Late Late Toy Show",
        pianoKeyContent: "The Late Late Toy Show",
        date: "November 2014",
        content: "Thinking back, it's crazy that I got the chance to perform on live television streamed to millions of people all across Ireland. " +
            "To this day, this is still the largest audience I ever played for! It was an incredible experience, I was famous in school the next day! " +
            "The YouTube video has just under 7,000 views and I got to meet Ryan Tubridy too!",
        image: toyShow
    },
    {
        title: "On a Winning Streak...",
        pianoKeyContent: "5 Prizes",
        date: "Spring 2016",
        content: "I won 5 prizes in one season! " +
            "In DIT, I came first in the Under 14 Solo and the Mai Byrne Raymond Under 18 Sonata competitions. " +
            "As well as that, I won the Gerard Shanahan Liszt Award for playing Paganini Caprice No.5 'La Chasse' by Liszt. " +
            "I came first in the Piano Academy Under 12 and I took home the Piano Academy Overall Junior Prize at the Prizewinner's Concert. " +
            "I was on a roll!",
    },
    {
        title: "Giovani Musicisti - Città di Treviso International Piano Competition",
        pianoKeyContent: "International Piano Competition in Italy",
        date: "Summer 2016",
        content: "When I first thought of an international piano competition, I expected spades of child prodigies playing on fancy Steinways in luxurious concert halls... " +
            "I was disappointed. " + 
            "Instead, when we arrived two days early, there wasn't even a piano for me to practice on. I had to resort to practicing in my mind, tapping on tables at our hotel bar. " + 
            "Despite not practicing on a real piano, I was awarded first prize in the Giovani Musicisti - Città di Treviso International Piano Competition Category C (Under 13), receiving a mark of 97/100 from the panel of judges."
    },   
    {
        title: "Noor Musik International Piano Competition",
        pianoKeyContent: "International Piano Competition in Estonia",
        date: "Spring 2017",
        content: "I passed the preliminary rounds of the Noor Musik International Piano Competition of Estonia, and was invited to compete in person in Tartu. " +
            "Aged 13, I performed Allemande and Gigue from French Suite No.6 by Bach, the first movement of Sonata in G major by Mozart, and Etude Op.10 No.5 'Black Keys' by Chopin. " +
            "As well as that, I received a masterclass from Karl Juris, one of the judges from the University of Arts Helsinki. " +
            "Although me and my teacher thought I played exceptionally well, unfortunately the panel of judges didn't agree with us.",
        image: estonia
    },    
    {
        title: "Carnegie Hall Debut",
        pianoKeyContent: "Carnegie Hall Debut",
        date: "October 2017",
        content: "I was the youngest of 12 Irish Rising Stars chosen to perform with the New York Sinfonietti at Carnegie Hall. " +
            "I performed the first movement of Mozart's Piano Concerto No.8 in C major. " +
            "This was an incredible experience, I got to play with an orchestra and I was the soloist! " +
            "I later featured in an article in The Epoch Times where my playing was praised - " + 
            "'Despite his youth, Yang was fleet and stylish, using very little pedal in a nod to historically informed performance practice. He exhibited both facility and maturity.'",
        image: carnegie
    },
    {
        title: "Boyle Arts Festival",
        pianoKeyContent: "Boyle Arts Festival",
        date: "Summer 2018 and Summer 2019",
        content: "Boyle Arts Festival loved my playing so much that they invited me to perform at their festival for two consecutive years. " +
            "And I loved playing here because there was no competition, no pressure, no adjudicators judging. " +
            "The audience was there just to listen, applaud, and enjoy the music. " + 
            "And it feels seriously great when you receive a standing ovation. " +
            "This was also the first time I was paid to perform.",
        image: boyle
    },    
    {
        title: "European Piano Teacher's Association",
        pianoKeyContent: "EPTA",
        date: "March 2018, March 2019",
        content: "I came first for two consecutive years, in the first year and second year competitions, " +
            "playing the Lark by Glinka, and Liszt Rigoletto respectively.",
        image: epta
    },
    {
        title: "First Feis Ceoil Win",
        pianoKeyContent: "First Feis Ceoil Win",
        date: "March 2019",
        content: "Feis Ceoil is Ireland's national music festival. I had come Very Highly Commended (the equivalent of 3rd or 4th) at Feis Ceoil a number of times before this, but I still hadn't taken home any silevrware. " +
            "Claude Biggs Memorial Cup was my first ever Feis Win for my baroque playing of Back and Scarlatti. " +
            "As well as this I placed 2nd in Junior Concerto, placing over someone I had never been able to beat before.",
        image: feisBiggs
    },
    {
        title: "National Youth Orchestra of Ireland",
        pianoKeyContent: "National Youth Orchestra of Ireland",
        date: "Winter 2018, Summer 2019, Winter 2019",
        content: "I was invited to play with the NYOI. Up until now I had mainly done solo stuff. With the occasional piano duets. " +
            "This was my first ever experience playing with a large group of other musicians. " +
            "It was fantastic meeting other talented musicians my age. And learned to count properly as well. " +
            "Most notable parts were in Shostakovich Symphony No.1 and Danzon No.2. So many amazing memories made here.",
        image: nyoi
    },
    {
        title: "Meeting Yuja Wang!",
        pianoKeyContent: "Yuja Wang",
        date: "September 2019",
        content: "I got to meet Yuja Wang! I was so starstruck when I met her backstage that I didn't know what to say. " +
            "After hearing her play the incredible 3rd Piano Concerto by Rachmaninoff.",
        image: yujaWang
    },
    {
        title: "TUDublin Conservatory of Music and Drama Awards",
        pianoKeyContent: "TUD Awards",
        content: "Received awards for scoring highest in the Conservatory Exams. 97/100 in Grade 8, 100/100 in Advanced Level Two.",
        image: tudAwards
    },
    {
        title: "Tignes MusicAlp Festival",
        pianoKeyContent: "Tignes MusicAlp Festival",
        date: "August 2019",
        content: "Studied under Christopher Elton. An incredible music festival that was located in the middle of the Alps. " +
            "I met fascinating musicians from all over the world that were taking music seriosuly as a career.",
        image: christopherElton
    },
    {
        title: "Feis Ceoil Gala Prizewinners Concert",
        pianoKeyContent: "Feis Ceoil Gala",
        date: "September 2019",
        content: "Performed Liszt Rigolette Paraphrase in the John Field Room of the National Concert Hall for winning the Biggs Memorial Cup.",
        image: feisGala
    },
    {
        title: "Frank Maher Finalist",
        pianoKeyContent: "Frank Maher Finalist",
        date: "October 2021",
        content: "This a competition for a bursary of 5,000 euros. All the finalists received 300 euros each. I was lucky enough to be one of the finalists.",
        image: frankMaher
    },
    {
        title: "Aras an Uachtarain",
        pianoKeyContent: "Aras an Uachtarain",
        date: "September 2022",
        content: "I played for the President Michael D. Higgins at the Aras an Uachtarain, setting the atmosphere with a collection of Chopin Nocturnes, Waltzes, for culture night.",
        image: arasAnUachtarain
    },
// potentially add, zoom recital
]

export default TIMELINE_OBJECTS;