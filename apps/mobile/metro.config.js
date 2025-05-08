// mobile-app/metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const path = require("node:path");

const config = getDefaultConfig(__dirname);

// Adjust the path to your monorepo root as needed
const workspaceRoot = path.resolve(__dirname, "../../"); // or '../..' if your structure is deeper

config.watchFolders = [
  workspaceRoot,
  path.resolve(workspaceRoot, 'packages/assets'), // watch the shared assets
];

// Optionally, help Metro resolve node_modules from the workspace root
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.transformer = {
  ...config.transformer,
  assetPlugins: ["expo-asset/tools/hashAssetFiles"],
};

module.exports = config;
