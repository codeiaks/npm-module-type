# npm-module-type

A simple tool to set the type to module in package.json files.

## Installation

You can install `npm-module-type` globally to use it as a command-line tool:

```bash
npm install -g npm-module-type
```

## Usage

Navigate to your Node.js project directory containing the `package.json` file and run the following command:

```bash
npm-module-type
```

This command will update the package.json file in the current directory, setting "type": "module".

### Example

Assume you have a `package.json` file like this:

```json
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

to

```json
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT",
  "type": "module"
}
```
