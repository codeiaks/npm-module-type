#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const packageJSONPath = path.resolve(process.cwd(), "package.json");

if (!fs.existsSync(packageJSONPath)) {
  console.error("package.json not found in the current directory");
  process.exit(1);
}

const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, "utf-8"));

packageJSON.type = "module";

fs.writeFileSync(
  packageJSONPath,
  JSON.stringify(packageJSON, null, 2),
  "utf-8"
);

console.log("Updated package.json with type: 'module'");
