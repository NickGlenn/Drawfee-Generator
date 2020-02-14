import config from "@nickglenn/frontend-config";

module.exports = config({
  input: {
    v2: "./src/v2/index.tsx",
    v1: "./src/v1/index.ts",
  },
  output: {
    dir: "./public",
    entryFileNames: "[name].js",
    format: "cjs",
  },
  missingExports: ["pluralize"],
  minify: true,
});
