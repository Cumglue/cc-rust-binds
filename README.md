# cc-rust-binds

Ever wanted to make your Cumcord plugins using Rust? Neither did we! That's why we made this.

## Usage
Mockup:
1) Import crate
2) Use cumcord functions
3) Cumpile
4) Use in your plugin

Example plugin included to show how to use it

## Deployment

To build this project run 

```bash
wasm-pack build --release --target web
```

To build the example plugin run

```bash
cd tests
sperm build
```
