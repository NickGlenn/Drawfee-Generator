/**
 * Parses the suggestions text file into an object of tokens.
 */
export function parse(str: string) {
  let categories: { [key: string]: string[] } = {}
  let category: null | string = null
  let lines = str.split(/\r?\n/)

  for (let line of lines) {
    line = line.trim()

    if (line.length === 0) continue

    if (line.charAt(0) === "[") {

      const m = line.match(/^\[(.+)\]$/)
      if (m) {
        category = m[1]

        if (!categories[category]) {
          categories[category] = []
        }

        continue
      }
    }

    if (category) {
      categories[category].push(line)
    }
  }

  return categories
}