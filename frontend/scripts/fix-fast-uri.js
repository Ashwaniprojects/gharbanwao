const fs = require("fs");
const path = require("path");

const dirs = [
  "node_modules/ajv-keywords/node_modules",
  "node_modules/schema-utils/node_modules",
  "node_modules/babel-loader/node_modules/ajv-keywords/node_modules",
  "node_modules/file-loader/node_modules/ajv-keywords/node_modules",
];

const src = path.resolve(__dirname, "..", "node_modules", "fast-uri");

dirs.forEach((d) => {
  const target = path.resolve(__dirname, "..", d, "fast-uri");
  if (!fs.existsSync(target)) {
    fs.mkdirSync(d, { recursive: true });
    fs.symlinkSync(src, target, "junction");
  }
});
