#!/usr/bin/env node

const loadGLTF = require('./dist/loadGLTF.cjs.js');
const fs = require("fs");

async function main() {

    console.log("test.js");

    await loadGLTF.loadGLTF("./assets/HousePlan.glb");

    const data = fs.readFileSync("./assets/HousePlan.glb");

    await parseGLTF.loadGLTF(data);

    process.exit(1);
}

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
