/**
 * Creates an array of a set length, filling in each value using the given function.
 */
export function fill<T>(length: number, fn: (values: T[], index: number) => T): T[] {
  let output: T[] = [];

  for (let i = 0; i < length; i++) {
    output.push(fn(output, i));
  }

  return output;
}

/**
 * Creates an array of a set length, filling in each value using the given function provided
 * the values are referentially unique.
 */
export function fillUnique<T>(length: number, fn: (values: T[], index: number) => T): T[] {
  return fill(length, (values, index) => {
    let candidate: T;
    do {
      candidate = fn(values, index);
    } while (values.includes(candidate));
    return candidate;
  });
}

/**
 * Formats an array of words into a listed format with oxford commas.
 */
export function oxford(words: string[]): string {
  switch (words.length) {
    case 0:
      return "";
    case 1:
      return words[0];
    case 2:
      return `${words[0]} and ${words[1]}`;
    default:
      let output = "";
      for (let i = 0; i < words.length; i++) {
        let prefix = (i === words.length - 1 ? ", and " : ", ");
        output += prefix + words[i];
      }
      return output;
  }
}

/**
 * Capitalizes the first letter of the given string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}