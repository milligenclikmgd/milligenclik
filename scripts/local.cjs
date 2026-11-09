const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff','.pdf':'application/pdf'};
const server=http.createServer((req,res)=>{let file;try{file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));}catch{res.writeHead(400).end();return}if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return}if(file===root)file=path.join(root,'index.html');fs.readFile(file,(error,body)=>{if(error){res.writeHead(404).end('Bulunamadi');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body)})});
server.on('error',e=>{console.error('Yerel sunucu acilamadi:',e.message);process.exitCode=1});
server.listen(3000,'127.0.0.1',()=>console.log('Milli Genclik: http://localhost:3000 — durdurmak icin Ctrl+C. GitHub veya Cloudflare degistirilmez.'));

