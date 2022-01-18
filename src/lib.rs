use wasm_bindgen::prelude::*;

pub mod cumcord;

#[wasm_bindgen]
pub fn init() {
    // Set up better error handling
    // https://github.com/rustwasm/console_error_panic_hook#readme
    console_error_panic_hook::set_once();
}

pub fn test() {
    cumcord::cum();
}
