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

const TIMELINE_OBJECTS = [
    {
        title: "Day One",
        pianoKeyContent: "Day One",
        date: "September 2010",
        content: "This is where it all started. I started piano at the age of 6, studying in the DIT Conservatory of Music and Drama with Evelyn Healy." +
           "One year later, I started studying under Shirin goudarzi Tobin.",
        image: dayOne
    },
    {
        title: "My First Win",
        pianoKeyContent: "My First Win",
        date: "March 2014",
        content: "I won my first competition, playing Etude Allegro by Yoshinao Nakada." +
            "At DIT Competitions, Under 10 Repertoire. After 4 years of daily practice.",
        image: firstWin
    },
    {
        title: "The Late Late Toy Show",
        pianoKeyContent: "The Late Late Toy Show",
        date: "November 2014",
        content: "It's crazy that I got the chance to perform on live television streamed to millions of people all across Ireland." +
            "To this day, this was probably the most people to hear me play at the one time! Incredible experience, I got to meet Ryan Tubridy too!",
        image: toyShow
    },
    {
        title: "Winning Streak",
        pianoKeyContent: "5 Prizes",
        date: "Spring 2016",
        content: "I was on a roll! In DIT, I came first in U14, Mai Byrne Raymond U18 Sonata, and a Gerard Shanahan LIszt Award. In the Piano Academy U12, " +
            "and the Piano Academy Overall Junior Prize. I vividly remember playing LIszt Paganini Etude – La Chasse.",
        image: toyShow
    },
    {
        title: "Giovanni Citta de Treviso International Piano Competition",
        pianoKeyContent: "International Piano Competition in Italy",
        date: "Summer 2016",
        content: "I was awarded first prize in International Piano Competition in Treviso Italy in the Category C. I played Liszt Paganini Caprice No.5." +
            "Receiving mark from the judges of 97/100. We had a lovely holiday with my teacher in Venice too!" +
            "There was no piano for me to practice on, so we had to resort to practining in my mind, tapping on tables in the bar of our hotel. Was taught Alexander technique for rest and relaxation.",
        image: estonia
    },   
    {
        title: "Noor Musik International Piano Competition",
        pianoKeyContent: "International Piano Competition in Estonia",
        date: "Spring 2017",
        content: "I passed the preliminary round of the Estonia Noor Musik International Piano Competition. Here, I played Chopin Black Keys Etude." +
            "The facilities were far better than the ones in Italy, I actually had a piano to practice on! Although me and my teacher thought I played exceptionally well," +
            "the judges didn't agree with me.",
        image: estonia
    },    
    {
        title: "Carnegie Hall Debut",
        pianoKeyContent: "Carnegie Hall Debut",
        content: "I was one of 12 young Irish Rising Stars chosen to perform with the New York Sinfonietti at Carnegie Hall. I performed the first movement of Mozart's Piano Concerto No.8 in C major." +
            "This was incredible, playing with an orchestra, and I was the soloist! I later featured in an article in thepochtimes and they said my playing was unpedaled with a nod to the composer's time period.",
        image: carnegie
    },
    {
        title: "Boyle Arts Festival",
        pianoKeyContent: "Boyle Arts Festival",
        date: "Summer 2018 and Summer 2019",
        content: "They enjoyed me so my playing so much in 2018 that they wanted me back again!" +
            "This, I believe was the first time I got paid to perform. It was great audience and I got a standing ovation. I loved playing here because there was no pressure." +
            "There was no competition, no pressure, the audience was there to enjoy my playing. No one was judging.",
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
            "After hearning her play the incredible 3rd Piano Concerto by Rachmaninoff.",
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
        title: "Zoom Recital",
        pianoKeyContent: "Zoom Recital",
        date: "August 2020",
        content: "In the midst of the COVID-19 pandemic, as the country was in lockdown, I decided to hold and organize my own recital online via zoom." +
            "Although it wasn't the same as performing to a live audience, there was only applause in the form of emojis, it gave me something to work towards during lockdown.",
        image: frankMaher
        // get esther's poster as image
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
        image: frankMaher
        // image from phone
    },

]

export default TIMELINE_OBJECTS;