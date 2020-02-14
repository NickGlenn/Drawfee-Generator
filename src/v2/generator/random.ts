import { fillUnique } from "../utils";

/**
 * Picks a random float value between 0 and 1.
 */
function random(): number {
  // TODO: replace with a better random value generator
  return Math.random();
}

/**
 * Picks a random value from any of the given arguments or argument arrays.
 */
export function from<T>(...args: (T | T[])[]): T {
  return item(args.flat());
}

/**
 * Picks a number of unique values from the given arguments.
 */
export function listFrom<T>(length: number, ...args: (T | T[])[]): T[] {
  let items = args.flat();
  return fillUnique(length, () => item(items));
}

/**
 * Picks a random item in the given array.
 */
export function item<T>(items: T[]): T {
  var i = Math.floor(random() * items.length);
  return items[i];
}

/**
 * Generates a random boolean value using the given odds. This means that if the value 30
 * is given that there is a 30% chance the result will be true. Defaults to a 50/50 chance.
 */
export function chance(odds = 50) {
  odds = Math.min(1, Math.max(0, odds / 100));
  return random() < odds;
}

/**
 * Picks a random integer value between the min and max.
 */
export function int(min = 0, max = 1): number {
  return Math.round(float(min, max));
}

/**
 * Picks a random float value between the min and max.
 */
export function float(min = 0, max = 1): number {
  const t = random();
  return min * (1 - t) + max * t;
}

/**
 * Either returns the value or doesn't, based on the set odds.
 */
export function maybe<T>(odds = 50, value: T, fallback?: T): undefined | T {
  return chance(odds) ? value : fallback;
}