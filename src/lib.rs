use wasm_bindgen::prelude::*;

pub mod cumcord;

#[wasm_bindgen]
pub fn setup_hook() {
    // Set up better error handling
    // https://github.com/rustwasm/console_error_panic_hook#readme
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn test() {
    cumcord::cum();
}
