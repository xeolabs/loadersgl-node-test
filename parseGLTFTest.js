#!/usr/bin/env node

const parseGLTF = require('./dist/parseGLTF.cjs.js');
const fs = require("fs");

async function main() {

    console.log("parseGLTFTest.js");

    const data = fs.readFileSync("./assets/HousePlan.glb");

    parseGLTF.parseGLTF(data).then(
        function () {
            process.exit(1);
        },
        function (err) {
            console.log(err);
            process.exit(-1);
        });


}

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
