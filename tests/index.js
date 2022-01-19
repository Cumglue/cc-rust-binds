import init, { testFunction, setup_hook } from '../pkg';

import importWasm from '../pkg/cc_binds_bg.wasm';

export default (data) => {
    return {
        async onLoad() {
            await init(importWasm());
            setup_hook();
            console.log(testFunction()); // Should call cumcord.cum()
        },
        onUnload() {}
    }
}