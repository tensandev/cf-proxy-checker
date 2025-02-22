# cf-proxy-checker

`check-cloudflare-cli` は、指定したURLが Cloudflare のプロキシを通っているかを簡単に確認できる Node.js 製のCLIツールです。  

**特徴:**  
- コマンドラインからURLを指定するだけでCloudflareのプロキシ検出  
- `server` ヘッダーをチェックしてCloudflareの存在を確認  
- シンプルで軽量な設計  

**使い方:**
```sh
node index.js https://example.com
```
