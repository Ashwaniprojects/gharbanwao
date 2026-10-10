const fs = require("fs");
const path = require("path");

// Fix: ajv-keywords@5.x needs fast-uri but doesn't declare it as a dependency.
// This breaks on Node.js >= 22 due to stricter module resolution.
// We copy fast-uri into every node_modules tree that needs it.
const src = path.resolve(__dirname, "..", "node_modules", "fast-uri");

const targets = [
  "node_modules/ajv-keywords/node_modules",
  "node_modules/schema-utils/node_modules",
  "node_modules/babel-loader/node_modules/ajv-keywords/node_modules",
  "node_modules/file-loader/node_modules/ajv-keywords/node_modules",
  "node_modules/fork-ts-checker-webpack-plugin/node_modules/ajv-keywords/node_modules",
];

let patched = false;
targets.forEach((rel) => {
  const targetDir = path.resolve(__dirname, "..", rel);
  const dest = path.join(targetDir, "fast-uri");
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(targetDir, { recursive: true });
    try {
      fs.cpSync(src, dest, { recursive: true });
      patched = true;
    } catch (err) {
      console.warn(`[fix-fast-uri] Failed to copy to ${rel}:`, err.message);
    }
  }
});

if (patched) {
  console.log("[fix-fast-uri] Patched fast-uri into ajv-keywords dependency trees");
}
