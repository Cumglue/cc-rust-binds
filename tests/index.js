import wasmFile from "../pkg/cc_binds_bg.wasm:static"

export default (data) => {
    return {
        onLoad() {
            WebAssembly.instantiate(new TextEncoder().encode(wasmFile).buffer).then(console.log)
        },
        onUnload() {}
    }
}