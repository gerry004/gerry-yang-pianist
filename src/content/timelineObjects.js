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
        content: "This is a competition where students in the same year in secondary school compete against each other. " +
            "I came first for two consecutive years, playing The Lark by Glink in the 1st year competition " +
            "and Rigoletto Paraphrase by Liszt in the 2nd year comeptition. ",
        image: epta
    },
    {
        title: "First Feis Ceoil Win",
        pianoKeyContent: "First Feis Ceoil Win",
        date: "March 2019",
        content: "Feis Ceoil is Ireland's largest music competition and this was my first time winning in it. " +
            "I won the Claude Biggs Memorial Cup for Baroque playing. " + 
            "I played Allemande from French Suite No.6 by Bach and Sonata in D minor by Scarlatti. " +
            "As well as that I placed 2nd in the Junior Concerto comeptition, playing the first movement of Piano Concerto No.3 in C minor by Beethoven.",
        image: feisBiggs
    },
    {
        title: "National Youth Orchestra of Ireland",
        pianoKeyContent: "National Youth Orchestra of Ireland",
        date: "Winter 2018, Summer 2019, Winter 2019",
        content: "I played piano, organ, and celesta for the National Youth Orchestra of Ireland, " + 
            "performing most notably Symphony No.1 by Shostakovich, Enigma Variations by Elgar, and Danzon No.2 by Marquez. " +
            "This was an incredible experience, making friends and making music with other talented musicians my age. " +
            "I made so many amazing memories here!",
        image: nyoi
    },
    {
        title: "Meeting Yuja Wang!",
        pianoKeyContent: "Yuja Wang",
        date: "September 2019",
        content: "After hearing Yuja Wang perform the incredible Piano Concerto No.3 by Rachmaninoff, I got to meet her backstage! " +
            "I was so shocked I had no idea what to say, I had never met a famous person before!",
        image: yujaWang
    },
    {
        title: "TUDublin Conservatory of Music and Drama Awards",
        pianoKeyContent: "TUD Awards",
        content: "I received awards from the TUDublin Conservatory for scoring the highest marks in the Conservatory's Grade Exams. " +
            "I achieved an impressive 97/100 in Grade 8 and 100/100 in Advanced Level Two. " + 
            "As well as that, in my diploma exams, I scored 97/100 in the DipLCM and 91/100 in the LTCL.",
        image: tudAwards
    },
    {
        title: "Tignes MusicAlp Festival",
        pianoKeyContent: "Tignes MusicAlp Festival",
        date: "August 2019",
        content: "I spent 4 weeks studying with Christopher Elton at an incredible music festival 'MusicAlp' located in Tignes, in the middle of the Alps " +
            "As well as learning from world class teachers, I met fascinating professional musicians from all over the world. " +
            "This experience helped me decide whether I wanted to take on music as a career.",
        image: christopherElton
    },
    {
        title: "Feis Ceoil Gala Prizewinners Concert",
        pianoKeyContent: "Feis Ceoil Gala",
        date: "September 2019",
        content: "I performed Liszt Rigoletto Paraphrase at the Feis Ceoil Prizewinner's Concert in the John Field Room of the National Concert Hall " +
            "for winning the Claude Biggs Memorial Cup that year.",
        image: feisGala
    },
    {
        title: "Frank Maher Finalist",
        pianoKeyContent: "Frank Maher Finalist",
        date: "October 2021",
        content: "Frank Maher Musical Awards is a competition open to 6th year students with a grand prize of 5,000 euros. " +
            "With over 40 applicants around Ireland, I was one of six finalists chosen to perform at the Mill Theatre. " +
            "I performed the first movement of Beethoven's Piano Sonata No.11 in B flat major and Etude Op.10 No.3 'Tristesse' by Chopin.",
        image: frankMaher
    },
    {
        title: "Aras an Uachtarain",
        pianoKeyContent: "Aras an Uachtarain",
        date: "September 2022",
        content: "I played for President Michael D. Higgins at the Aras an Uachtarain, " +
            "setting the atmosphere at the drinks reception with a collection of Chopin Nocturnes and Waltzes.",
        image: arasAnUachtarain
    }
]

export default TIMELINE_OBJECTS;