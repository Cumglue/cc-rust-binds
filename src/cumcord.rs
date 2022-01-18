use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(getter, js_namespace = cumcord)]
    pub fn cum() -> String;
}