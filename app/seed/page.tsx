import { Button } from "@/components/ui/button";
import { prisma } from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.movie.createMany({
      
      data: [
        {
          id: 0,
          title: "Gran Turismo",
          age: 12,
          duration: 2.15,
          overview:
            "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
          videoSource:
            "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
          imageString:
            "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
          release: 2023,
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
        },

        {
          id: 1,
          imageString:
            "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
          title: "A Haunting in Venice",
          age: 12,
          duration: 1.44,
          overview:
            "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
        },
        {
          id: 2,
          title: "Five Nights at Freddy's",
          age: 16,
          duration: 1.5,
          overview:
            "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
          release: 2023,
          videoSource: "",
          imageString:
            "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
        },
        {
          id: 4,
          title: "Suits",
          age: 12,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
          overview:
            "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
          release: 2011,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
        },
        {
          id: 5,
          title: "Chernobyl",
          age: 16,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
          overview:
            "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
          release: 2019,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
        },
        {
          id: 6,
          title: "Retribution",
          age: 12,
          duration: 1.31,
          imageString:
            "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
          overview:
            "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
        },
        {
          id: 7,
          title: "Spider-Man: Across the Spider-Verse",
          age: 12,
          duration: 2.2,
          imageString:
            "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
          overview:
            "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
          release: 2023,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
        },

        {
          id: 8,
          title: "Coco",
          release: 2017,
          age: 0,
          duration: 1.45,
          imageString:
            "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
          overview:
            "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
        },
        {
          id: 9,
          title: "Monk",
          release: 2002,
          age: 12,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
          overview:
            "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
        },
        {
          id: 10,
          title: "Family Guy",
          age: 16,
          duration: 0,
          imageString:
            "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
          overview:
            "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
          release: 1999,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
        },

{
      id: 11,
      title: "Oppenheimer",
      age: 16,
      duration: 3.0,
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      imageString:
        "https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/26/16/52/2793170.jpg",
      release: 2023,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/uYPbbksJxIg",
    },
    {
      id: 12,
      title: "The Batman",
      age: 16,
      duration: 2.56,
      overview:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      imageString:
        "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      release: 2022,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/mqqft2x_Aa4",
    },
    {
      id: 13,
      title: "Avatar: The Way of Water",
      age: 12,
      duration: 3.12,
      overview:
        "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora.",
      imageString:
        "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release: 2022,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/d9MyW72ELq0",
    },

    {
      id: 14,
      title: "Breaking Bad",
      age: 18,
      duration: 0,
      imageString:
        "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      overview:
        "A high school chemistry teacher diagnosed with cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      release: 2008,
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id: 15,
      title: "The Witcher",
      age: 18,
      duration: 0,
      imageString:
        "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      overview:
        "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      release: 2019,
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/ndl1W4ltcmg",
    },
    {
      id: 16,
      title: "Inception",
      age: 14,
      duration: 2.28,
      imageString:
        "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      overview:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      release: 2010,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/YoHD9XEInc0",
    },

    {
      id: 17,
      title: "John Wick: Chapter 4",
      age: 18,
      duration: 2.49,
      imageString:
        "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      overview:
        "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, he must face a new enemy with powerful alliances.",
      release: 2023,
      videoSource: "",
      category: "movie",
      youtubeString: "https://www.youtube.com/embed/qEVUtrk8_B4",
    },
    {
      id: 18,
      title: "Wednesday",
      age: 13,
      duration: 0,
      imageString:
        "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      overview:
        "Wednesday Addams attempts to master her psychic ability, thwart a monstrous killing spree, and solve the mystery that embroiled her parents 25 years ago.",
      release: 2022,
      videoSource: "",
      category: "show",
      youtubeString: "https://www.youtube.com/embed/Di310WS8zLk",
    },

    {
  id: 19,
  title: "Dune: Part Two",
  age: 13,
  duration: 2.46,
  overview:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  imageString: "https://image.tmdb.org/t/p/original/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/U2Qp5pL3ovA",
},
{
  id: 20,
  title: "Deadpool & Wolverine",
  age: 18,
  duration: 2.15,
  overview:
    "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. Together, they team up to defeat a common enemy.",
  imageString: "https://m.media-amazon.com/images/M/MV5BNWFkMThiODEtNzdkMi00ZDczLWIwMzktYTFmNjM1M2YxZjU5XkEyXkFqcGc@._V1_.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/uJMCNJP2ipI",
},
{
  id: 21,
  title: "Inside Out 2",
  age: 0,
  duration: 1.45,
  overview:
    "Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!",
  imageString: "https://image.tmdb.org/t/p/original/xkt4YBiFxpTRijrdXWtksHgRlnH.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/LEjhY15eCx0",
},
{
  id: 22,
  title: "The Fall Guy",
  age: 13,
  duration: 2.0,
  overview:
    "A stuntman sets out to find the missing star of his ex-girlfriend’s blockbuster film.",
  imageString: "https://image.tmdb.org/t/p/original/iEFuHjqrE059SmflBva1JzDJutE.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/EySdVK0NK1Y",
},
{
  id: 23,
  title: "Kung Fu Panda 4",
  age: 0,
  duration: 1.34,
  overview:
    "Po must train a new warrior when he's chosen to become the Spiritual Leader of the Valley of Peace.",
  imageString: "https://image.tmdb.org/t/p/original/nqXsAaQsKw2gKpkfhIgjXNDRqg7.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/_inKs4eeHiI",
},

{
  id: 24,
  title: "Kingdom of the Planet of the Apes",
  age: 13,
  duration: 2.25,
  overview:
    "Several generations in the future following Caesar's reign, apes are now the dominant species living harmoniously, while humans have been reduced to living in the shadows.",
  imageString: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/XtFI7SNtVpY",
},

{
  id: 25,
  title: "Beetlejuice Beetlejuice",
  age: 13,
  duration: 1.45,
  overview:
    "After an unexpected family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia’s life is turned upside down.",
  imageString: "https://image.tmdb.org/t/p/original/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-movie",
  youtubeString: "https://www.youtube.com/embed/f8JrZ7Q_p-8",
},
{
  id: 27,
  title: "House of the Dragon",
  age: 18,
  duration: 1.0,
  overview:
    "The story of House Targaryen set 200 years before the events of Game of Thrones.",
  imageString: "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.youtube.com/embed/DotnJ7tTA34",
},
{
  id: 28,
  title: "The Boys",
  age: 18,
  duration: 1.0,
  overview:
    "A group of vigilantes set out to take down corrupt superheroes who abuse their powers.",
  imageString: "https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
  release: 2024,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.youtube.com/embed/5SKP1_F7ReE",
},
{
  id: 29,
  title: "Loki",
  age: 13,
  duration: 1.0,
  overview:
    "The God of Mischief steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
  imageString: "https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_.jpg",
  release: 2023,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.imdb.com/video/vi1278592793/?playlistId=tt9140554&ref_=ext_shr_lnk",
},
{
  id: 30,
  title: "Stranger Things",
  age: 16,
  duration: 1.0,
  overview:
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.",
  imageString: "https://www.themoviedb.org/t/p/w1280/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
  release: 2023,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://youtu.be/iKZyYdwS3Wg?si=9v6vd4idCBkufQWZ",
},

{
  id: 31,
  title: "The Last of Us",
  age: 18,
  duration: 1.0,
  overview:
    "Joel and Ellie, a pair connected through the harshness of the world they live in, must survive brutal circumstances.",
  imageString: "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  release: 2023,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.youtube.com/embed/uLtkt8BonwM",
},
{
  id: 32,
  title: "Squid Game",
  age: 18,
  duration: 1.0,
  overview:
    "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but deadly stakes.",
  imageString: "https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  release: 2023,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.youtube.com/embed/oqxAJKy0ii4",
},
{
  id: 33,
  title: "Peaky Blinders",
  age: 18,
  duration: 1.0,
  overview:
    "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
  imageString: "https://image.tmdb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  release: 2022,
  videoSource: "",
  category: "trending-show",
  youtubeString: "https://www.youtube.com/embed/oVzVdvGIC7U",
},
  ],
});
}

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
