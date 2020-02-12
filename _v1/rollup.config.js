import typescript2 from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    file: "public/app.js",
    format: "iife",
    sourcemap: (process.env.NODE_ENV !== "production"),
  },
  plugins: [
    typescript2(),
  ],
};