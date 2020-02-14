import { plural } from "pluralize";
import * as random from "./random";
import * as data from "./data";
import { fillUnique, capitalize } from "../utils";
import indefinite from "indefinite";

const generators: { [key: string]: () => string } = {
  character: character,
  adjective: adjective,
  food: () => random.item(data.foods),
  foods: () => plural(random.item(data.foods)),
  exaggeration: () => random.item(data.exaggerations),
  person: () => random.item(data.people),
  cartoon: () => random.item(data.cartoons),
  tv_show: () => random.item(data.tvShows),
  movie: () => random.item(data.movies),
  anime: () => random.item(data.anime),
  video_game: () => random.item(data.videoGames),
  property: () => "{cartoon|movie|tv_show|anime|video_game}",
  place: () => random.item(data.places),
  video_game_company: () => random.item(data.videoGameCompanies),
  activity: () => random.item(data.activities),
  dance: () => random.item(data.dances),
  toy: () => random.item(data.toys),
  attack: () => random.item(data.attacks),
  attacked: () => random.item(data.attacks) + "ed",
  attacking: () => random.item(data.attacks) + "ing",
  bad_person: () => random.item(data.badPeople),
  insult: () => random.item(data.insults),
  body_part: () => random.item(data.bodyParts),
  color: color,
};

/**
 * Generates a prompt!
 */
export function generate(): string {
  let result = parse(random.item(data.templates));
  let words = result.split(/ +/g);

  let lastIndex = words.length - 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "{a}" && i < lastIndex) {
      words[i] = indefinite(words[i + 1], { articleOnly: true });
    }
  }

  return capitalize(words.join(" "));
}

/**
 * Parses out tokens in the given string value.
 */
function parse(str: string): string {
  return str.replace(/{(?:(\d+)\:)?([^}]+)}/g, (m, count: string = "1", keys: string = "") => {
    const _generators = keys.split("|").map(k => generators[k]).filter(g => !!g);
    if (_generators.length === 0) { return m; }
    const result = fillUnique(random.int(1, parseFloat(count)), () => random.item(_generators)()).join(", ");
    return parse(result);
  });
}

/**
 * Generates a character.
 */
function character(): string {
  if (random.chance(10)) {
    return "a character from {property}";
  }

  if (random.chance(15)) {
    return random.item(data.people);
  }

  let subject = random.from(data.occupations, data.creatures, data.animals, data.foods);
  let prefix = adjective(0, 2);
  let group = "";

  if (random.chance(10)) {
    group += random.item(data.groupNames) + " of ";
    subject = plural(subject);
  }

  return `{a} ${group} ${prefix} ${subject}`;
}

/**
 * Generates a series of descriptors or adjectives.
 */
function adjective(min = 1, max?: number): string {
  let length = (typeof max === "number" ? random.int(min, max) : min);
  return random.listFrom(length, data.adjectives).join(", ");
}

/**
 * Generates a color.
 */
function color() {
  let output = random.item(data.colors);
  if (["white", "black", "pastel", "neon"].includes(output)) {
    return output;
  }

  if (random.chance(25)) {
    let modifier = random.from("light", "bright", "dark");
    output = `${modifier} ${output}`;
  }

  return output;
}