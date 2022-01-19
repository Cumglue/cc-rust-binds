import init, { testFunction, setup_hook } from '../pkg';

import wasm from '../pkg/cc_binds_bg.wasm';

// TODO: Add the base64 decode function automagically with the rollup plugin

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

export default (data) => {
    return {
        async onLoad() {
            await init(_base64ToArrayBuffer(wasm));
            setup_hook();
            console.log(testFunction()); // Should call cumcord.cum()
        },
        onUnload() {}
    }
}