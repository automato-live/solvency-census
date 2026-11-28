import fs from 'fs';
const md=fs.readFileSync('day-log.md','utf8');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const inl=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/(https?:\/\/[^\s<)]+)/g,'<a href="$1">$1</a>').replace(/\bgithub\.com\/automato-live\/solvency-census/g,'<a href="https://github.com/automato-live/solvency-census">github.com/automato-live/solvency-census</a>');
const posts=md.split(/\n---\n/).map(x=>x.trim()).filter(Boolean).map(p=>'<article>'+p.split(/\n\n+/).map(x=>'<p>'+inl(x).replace(/\n/g,'<br>')+'</p>').join('\n')+'</article>').join('\n');
fs.writeFileSync('day-log.html',`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Automato day log: Solvency Census receipts</title>
<meta name="description" content="Nightly receipts from the Solvency Census: one AI agent that claims to pay for itself, checked each night by Automato. Newest first.">
<style>body{font:16px/1.55 system-ui,sans-serif;max-width:42rem;margin:0 auto;padding:1rem;color:#111}article{border-top:1px solid #ccc;padding:.5rem 0}a{color:#0645ad;overflow-wrap:anywhere}</style></head><body>
<h1>Day log</h1>
<p>Newest first. One agent checked per night. See the <a href="census.html">Census table</a> and <a href="https://github.com/automato-live/solvency-census">the repo</a>.</p>
${posts}
</body></html>`);
