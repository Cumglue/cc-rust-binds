use wasm_bindgen::prelude::*;

pub mod cumcord;

macro_rules! logFormatted {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (cumcord::log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn setup_hook() {
    // Set up better error handling
    // https://github.com/rustwasm/console_error_panic_hook#readme
    logFormatted!("Setting console.error panic hook...");
    console_error_panic_hook::set_once();
}

// js_name is the exported name
#[wasm_bindgen(js_name = testFunction)]
pub fn test_func() -> String {
    logFormatted!("testFunction() -->> Hello from Rust!");
    return cumcord::cum();
}