// Force LightningCSS to use the WASM transformer to avoid native .node resolution issues
process.env.CSS_TRANSFORMER_WASM = '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
