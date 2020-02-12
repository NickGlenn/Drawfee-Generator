import config from "@nickglenn/frontend-config";

module.exports = config({
  input: "./src/index.tsx",
  output: {
    file: "./public/app.js",
    name: "DrawfeeGen",
    format: "iife",
  },
});
