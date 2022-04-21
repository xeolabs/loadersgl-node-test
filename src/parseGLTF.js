// import {installFilePolyfills} from '@loaders.gl/polyfills';
// installFilePolyfills();



// import fetch, {
//     Blob,
//     blobFrom,
//     blobFromSync,
//     File,
//     fileFrom,
//     fileFromSync,
//     FormData,
//     Headers,
//     Request,
//     Response,
// } from 'node-fetch';
//
// if (!globalThis.fetch) {
//     globalThis.fetch = fetch
//     globalThis.Headers = Headers
//     globalThis.Request = Request
//     globalThis.Response = Response
// }

import {parse} from '@loaders.gl/core';
import {GLTFLoader} from '@loaders.gl/gltf';

import 'cross-fetch/polyfill';

import '@loaders.gl/polyfills';
import {installFilePolyfills} from '@loaders.gl/polyfills';
installFilePolyfills();

const parseGLTF = function (data) {

    //console.log("parseGLTF(): data=" + data);

    return new Promise(function (resolve, reject) {

        parse(data, GLTFLoader, {}).then((gltfData) => {
            console.log(gltfData);
            resolve();
        }, (errMsg) => {
            reject(errMsg);
        });
    });
}

export {parseGLTF};