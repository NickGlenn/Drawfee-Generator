import firstWords from "./words/first";
import secondWords from "./words/second";
import thirdWords from "./words/third";

/**
 * Get the DOM elements we'll be modifying.
 */
var words = document.getElementById("words");
var word1 = document.getElementById("word_1");
var word2 = document.getElementById("word_2");
var word3 = document.getElementById("word_3");
var btn   = document.getElementById("roll");
var odds  = document.getElementById("odds");

/**
 * Picks a random string out of the given words array and returns it.
 */
function pickRandom(words: string[]): string {
  var i = Math.floor(Math.random() * words.length);
  return words[i];
}

/**
 * Randomize each word from our lists.
 */
function randomizeWords(current = 0) {
  if (current < 1) {
    word1.innerText = pickRandom(firstWords);
  }

  if (current < 2) {
    word2.innerText = pickRandom(secondWords);
  }

  if (current < 3) {
    word3.innerText = pickRandom(thirdWords) + ".";
  }
}

/**
 * On button click, disable the button and roll the roulette.  Then it
 * re-enables the button when the selection is made.
 */
function roll(ev: Event) {
  ev.preventDefault();

  // disable the button upon click
  btn.setAttribute("disabled", "disabled");

  // set the default colors to gray
  words.className = "Words isRolling";

  // track the current word that we're on
  var currentWord = 0;

  // start another interval timer for the word scramble
  var t1 = setInterval(() => {
    randomizeWords(currentWord);
  }, 50);

  // start an interval timer to pick each word
  var t2 = setInterval(() => {
    currentWord += 1;
    if (currentWord >= 3) {
      clearInterval(t1);
      clearInterval(t2);
      btn.removeAttribute("disabled");
      btn.innerText = "Try Again";
      words.className = "Words";
    } else {
      words.className = "Words isRolling onWord" + currentWord;
    }
  }, 1500);
}

btn.addEventListener("click", roll);

// set the odds
var allCount = (firstWords.length * secondWords.length * thirdWords.length);
odds.innerText = `There are a total of ${allCount} possibilities.`;