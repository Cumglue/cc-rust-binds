import init from '../pkg';

import wasm from '../pkg/cc_binds_bg.wasm';

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
            const cumglue = await init(_base64ToArrayBuffer(wasm));
            cumglue.setup_hook();
            let x = cumglue.test();
            console.log(typeof(x), x);
        },
        onUnload() {}
    }
}