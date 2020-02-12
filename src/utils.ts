/**
 * Picks a random string out of the given words array and returns it.
 */
export function pickRandom(words: string[]): string {
  var i = Math.floor(Math.random() * words.length);
  return words[i];
}