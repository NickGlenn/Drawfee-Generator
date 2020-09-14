import { pickRandom, lerp, capitalize } from "./utils"
import pluralize from "pluralize"
import indefinite from "indefinite"

/**
 * Generates a new phrase using an object of token categories.
 */
export function generate(categories: { [key: string]: string[] }, root = "template") {

  const replaceRange = (m: string, min: string, max: string) => {
    const isInt = !min.includes(".") && !max.includes(".")
    const result = lerp(parseFloat(min), parseFloat(max), Math.random())
    return isInt ? Math.round(result).toString() : result.toFixed(2)
  }

  const replaceToken = (m: string, inner: string, plural?: string): string => {
    // parse tokens that contain OR condition {foo|bar|baz}
    let tokens = inner.split(/\|/)

    // select a token from the list
    let token = pickRandom(tokens)

    // try and find the category for the token, bail if we can't find it
    if (!categories[token]) return m

    // get the data for the current category
    let category = pickRandom(categories[token])

    // if the item in the category starts with =, then keep jumping categories
    while (category.charAt(0) === "=") {
      token = category.slice(1)
      category = pickRandom(categories[token])
    }

    // process the category and store the result
    let output = process(category)

    // if our token has a trailing "s", pluralize the result
    if (plural) output = pluralize(output)

    return output
  }

  const process = (str: string): string => {
    return str
      .replace(/{(\-?\d+(?:\.\d+)?)\:(\-?\d+(?:\.\d+)?)}/g, replaceRange)
      .replace(/\{([^\}]+)}(s)?/g, replaceToken)
  }

  // start processing tokens
  let result = process(pickRandom(categories[root]))

  // split the result into separate words for the last step
  let words = result.split(/ +/g)
  let lastIndex = words.length - 1

  // loop through each word and look for our "a/an" identifier - if we find one of these
  // then replace it with the correct prefix based on the next word
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "{a}" && i < lastIndex) {
      words[i] = indefinite(words[i + 1], { articleOnly: true })
    }
  }

  // put the words back together and capitalize the phrase
  return capitalize(words.join(" "))
}