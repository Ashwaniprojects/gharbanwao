const { execSync } = require("child_process");
const path = require("path");
const cracoBin = path.resolve(__dirname, "node_modules", "@craco", "craco", "dist", "bin", "craco.js");
const args = process.argv.slice(2);
execSync(`node "${cracoBin}" ${args.join(" ")}`, { stdio: "inherit" });
