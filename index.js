#!/usr/bin/env node

const axios = require("axios");
const { URL } = require("url");

// コマンドライン引数からURLを取得
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: check-cloudflare <URL>");
  process.exit(1);
}

const targetUrl = args[0];

(async () => {
  try {
    // URLのバリデーション
    new URL(targetUrl);
    
    // HTTPリクエストを送信
    const response = await axios.get(targetUrl, { timeout: 5000 });
    
    // Cloudflareのプロキシか確認
    const serverHeader = response.headers["server"] || "";
    if (serverHeader.toLowerCase().includes("cloudflare")) {
      console.log(`✅ Cloudflare proxy detected for ${targetUrl}`);
    } else {
      console.log(`❌ No Cloudflare proxy detected for ${targetUrl}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
