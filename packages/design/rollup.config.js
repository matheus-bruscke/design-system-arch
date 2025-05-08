const fs = require("node:fs");
const json = require("@rollup/plugin-json");
const typescript = require("@rollup/plugin-typescript");
const { defineConfig } = require("rollup");

// Map types to filenames as in the image
const typeToFilename = {
  color: "color.js",
  typography: "typography.js",
  borderRadius: "borderRadius.js",
  fontSizes: "fontSizes.js",
  size: "sizes.js",
};
// Plugin to generate index.d.ts
const indexDtsPlugin = () => {
  return {
    name: "index-dts",
    writeBundle() {
      // This runs after all files are written
      const indexDtsContent = `// Auto-generated index file
${Object.keys(typeToFilename)
  .map(
    (key) =>
      `export { default as ${key} } from "./foundations/${typeToFilename[key]}";`
  )
  .join("\n")}
`;
      fs.writeFileSync("dist/index.d.ts", indexDtsContent);
    },
  };
};

const designTokensPlugin = (tokensPath) => {
  return {
    name: "design-tokens",
    buildStart() {
      this.addWatchFile(tokensPath);
    },
    generateBundle() {
      // Read and parse the JSON
      const tokensJson = fs.readFileSync(tokensPath, "utf-8");
      const parsed = JSON.parse(tokensJson);

      // Access the 'global' object as the source of tokens
      const designTokens = parsed.global;

      const tokensByType = {};

      for (const [name, token] of Object.entries(designTokens)) {
        const { type, value } = token;
        if (!tokensByType[type]) tokensByType[type] = {};
        tokensByType[type][name] = value;
      }

      // Generate index.js to re-export everything
      const indexExports = [];

      for (const [type, tokens] of Object.entries(tokensByType)) {
        const filename = typeToFilename[type] || `${type}.js`;
        const basename = filename.replace(".js", "");
        const jsContent = `export default ${JSON.stringify(tokens, null, 2)};`;

        // Generate the JS file
        this.emitFile({
          type: "asset",
          fileName: `foundations/${filename}`,
          source: jsContent,
        });

        // Generate corresponding d.ts file
        const dtsContent = `declare const tokens: ${JSON.stringify(tokens, null, 2)};\nexport default tokens;\nexport { tokens };`;
        this.emitFile({
          type: "asset",
          fileName: `foundations/${filename.replace(".js", ".d.ts")}`,
          source: dtsContent,
        });

        // Add to index exports
        indexExports.push(
          `export { default as ${basename} } from "./foundations/${basename}.js";`
        );
      }

      // Create index file that exports everything
      this.emitFile({
        type: "asset",
        fileName: "index.js",
        source: `// Auto-generated index file\n${indexExports.join("\n")}\n`,
      });
    },
  };
};

module.exports = defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    json(),
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
      outDir: "dist",
      // Don't generate declaration files for the entry point
      noEmitOnError: false,
      emitDeclarationOnly: false,
      // Exclude index.ts from declaration generation
      exclude: ["src/index.ts"],
    }),
    designTokensPlugin("src/tokens.json"),
    indexDtsPlugin(),
  ],
});
