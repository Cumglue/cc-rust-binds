use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = cumcord)]
    pub fn cum() -> String;

    #[wasm_bindgen(js_namespace = ["cumcord", "utils", "logger"])]
    pub fn log(s: &str);
}