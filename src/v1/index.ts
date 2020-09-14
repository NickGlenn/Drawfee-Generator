import "./index.scss"

const firstWords = [
  "An angry",
  "A slightly agitated",
  "A woeful",
  "A depressed",
  "An amused",
  "A cranky",
  "A jovial",
  "An overlay happy",
  "A miserable",
  "A disgruntled",
  "A grand",
  "A wonderful",
  "A whimsical",
  "The majestic",
  "The worst",
  "The best",
  "A royal",
  "A mutated",
  "A disfigured",
  "A crippled",
  "A broken",
  "A wealthy",
  "A homeless",
  "A sick",
  "A dying",
  "A demented",
  "A big, red",
  "An awkward",
  "A busty",
  "A chubby",
  "An innapropriately dressed",
  "A radical",
  "An extreme",
  "A tubular",
  "A lazy",
  "A snazzy",
  "A lonely",
  "An obnoxious",
  "An adorable",
  "A wild",
  "A psychic",
  "A telepathic",
  "An all-powerful",
  "A smooth-talking",
  "A fast-talking",
  "A horrific",
  "A huge",
  "A tiny",
  "A gelatinous",
  "A gooey",
  "A slimy",
  "A singing",
  "A rapping",
]

const secondWords = [
  "otter",
  "weasel",
  "lion",
  "cougar",
  "bear",
  "t-rex",
  "stoat",
  "ferret",
  "badger",
  "doggo",
  "puppo",
  "girl squirrel",
  "koi boy",
  "gopher",
  "penguin",
  "sloth",
  "spider",
  "scorpion",
  "ant",
  "flea",
  "hamburger",
  "hot dog",
  "anthropomorphic peanut",
  "brave little toaster",
  "sponge boy",
  "Dragonball Z character",
  "Sonic OC",
  "baby",
  "politician",
  "chef",
  "king",
  "queen",
  "criminal",
  "thief",
  "robot",
  "android",
  "cyborg",
  "demogorgon",
  "bird-person",
  "wizard",
  "hobbit",
  "monster",
  "elf",
  "ghoul",
  "ghost",
  "orc",
  "goblin",
  "monster",
  "dragon",
  "gelfling",
  "skeksi",
  "historical figure",
  "pirate",
  "knight",
  "caveman",
  "ninja",
  "samurai",
  "talking train",
  "singing plane",
  "living spacecraft",
  "toy",
  "Furby",
  "Teddy Ruxpin",
  "Transformer",
  "parrot",
  "zombie",
  "vampire",
  "werewolf",
]

const thirdWords = [
  "with a keytar",
  "with dual uzis",
  "playing X-Box",
  "dropping the sickest of beats",
  "in disguise",
  "slaying at guitar",
  "in Minecraft",
  "drawing anime",
  "doing the jitterbug",
  "decorating a bedroom",
  "smoking potpourri",
  "traveling back in time",
  "jumping the shark",
  "lighting fires",
  "binging on Netflix",
  "conducting evil experiments",
  "contemplating their very existence",
  "questioning whether any of this is real... like, actually real",
  "as a Dark Souls boss",
  "karate chopping people in the throat",
  "running in reverse",
  "doing SCIENCE",
  "shouting insults at strangers",
  "burninating the peasants",
  "burninating all the people",
  "handling a barrage of insults like a pro",
  "answering life's most important questions",
  "performing unspeakable acts",
  "eating hands",
  "killing zombies",
  "punching Hitler right in his stupid, facist face",
  "colluding with Russia",
  "crunching the numbers",
  "piloting a giant, cybernetic suit",
  "hacking the all of the government's secrets",
  "thinking about their childhood sled while on their death bed",
  "killing a guy named Bill",
  "leading the police on an extremely slow vehicular chase",
  "laughing at someone's inability to draw Poke'mon from memory",
  "striking an unflattering pose",
  "as steampunk character",
  "as a cybernetic warrior",
  "speaking in wingdings",
  "being forced to watch the Emoji Movie over and over and over",
  "singing, \"BELIEVE IT OR NOT, I'M WALKING ON AIR, I NEVER THOUGHT I WOULD FEEL SO FREE-EE-EEEEEE\" as loud as they can",
  "going through TSA security",
  "waiting in line at the DMV",
  "but as a Todd McFarlane comic book character",
  "as a 1920s cartoon character",
  "doing the Macarena",
  "performing magic tricks for adults",
  "livin' la vida loca",
  "drawing innapropriate pictures as a form of vandalism",
  "playing a VR game while throwing up absolutely everywhere",
  "cheating at soccer",
  "absolutely failing at being cool",
  "that won't stop talking",
  "flexing their muscles and showin off their sweet, sweet bod",
  "going on vacation but it's awful",
  "acting out some terrible Harry Potter fan-fiction that they wrote",
  "with comically large hands and/or feet",
  "ruining absolutely everything for everyone",
  "listening to MACINTOSH PLUS - リサフランク420 / 現代のコンピュー",
  "getting a skeezy feel up",
  "playing \"Wonderwall\" on their guitar like an absolute douche",
  "wishing you a Merry Christmas, but in the apparent \"war on Christmas\"",
  "pushing it to the limit",
  "drop kicking a Papa Murphy's pizza while listening to the \"Dropkick Murphys\"",
  "debugging a programming problem and hating life while doing it",
  "browsing 4chan and coming to understand what depravity actually is",
  "performing a musical rendition of Star Wars Episode 1",
  "humming the theme to X-Files",
  "vaping while wearing a fedora (a winning combination)",
  "facing themselves in the mirror... like... their REAL self",
  "turning into their final form",
  "failing to read the room",
]

/**
 * Get the DOM elements we'll be modifying.
 */
var words = document.getElementById("words")
var word1 = document.getElementById("word_1")
var word2 = document.getElementById("word_2")
var word3 = document.getElementById("word_3")
var btn = document.getElementById("roll")
var odds = document.getElementById("odds")

/**
 * Picks a random string out of the given words array and returns it.
 */
function pickRandom(words: string[]): string {
  var i = Math.floor(Math.random() * words.length)
  return words[i]
}

/**
 * Randomize each word from our lists.
 */
function randomizeWords(current = 0) {
  if (current < 1) {
    word1!.innerText = pickRandom(firstWords)
  }

  if (current < 2) {
    word2!.innerText = pickRandom(secondWords)
  }

  if (current < 3) {
    word3!.innerText = pickRandom(thirdWords) + "."
  }
}

/**
 * On button click, disable the button and roll the roulette.  Then it
 * re-enables the button when the selection is made.
 */
function roll(ev: Event) {
  ev.preventDefault()

  // disable the button upon click
  btn!.setAttribute("disabled", "disabled")

  // set the default colors to gray
  words!.className = "Words isRolling"

  // track the current word that we're on
  var currentWord = 0

  // start another interval timer for the word scramble
  var t1 = setInterval(() => {
    randomizeWords(currentWord)
  }, 50)

  // start an interval timer to pick each word
  var t2 = setInterval(() => {
    currentWord += 1
    if (currentWord >= 3) {
      clearInterval(t1)
      clearInterval(t2)
      btn!.removeAttribute("disabled")
      btn!.innerText = "Try Again"
      words!.className = "Words"
    } else {
      words!.className = "Words isRolling onWord" + currentWord
    }
  }, 1500)
}

btn!.addEventListener("click", roll)

// set the odds
var allCount = (firstWords.length * secondWords.length * thirdWords.length)
odds!.innerText = `There are a total of ${allCount} possibilities.`