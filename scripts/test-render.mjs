import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
let js=fs.readFileSync('src/data.js','utf8').replaceAll('export const ','const ')+'\n'+fs.readFileSync('src/main.js','utf8').replace("import './style.css';",'').replace("import {slides,demos,cards,quiz,resourceLinks} from './data.js';",'');
if(process.argv.includes('--standalone')){
 const html=fs.readFileSync('APERCU-AUTONOME-SEANCE-09.html','utf8');
 assert.ok(html.includes('data:image/png;base64,'+fs.readFileSync('public/assets/logo-LN-IA.png').toString('base64')),'logo fourni incorporé sans modification');
 assert.ok(!html.includes('fonts.googleapis.com'),'aucune police externe');
 assert.ok(!/<script[^>]+src=/.test(html),'aucun script externe');
 const inline=html.match(/<script>([\s\S]*?)<\/script>/);
 assert.ok(inline,'script autonome présent');js=inline[1];
}
const paths=['accueil','slides','method','demos','atelier','prompts','flashcards','quiz','validation','portfolio','ressources'];
for(const path of paths){
 const app={innerHTML:''};const btn={onclick:null};
 const doc={querySelector(s){return s==='#app'?app:btn},querySelectorAll(){return []},addEventListener(){},documentElement:{},body:{append(){}},createElement(){return {click(){},remove(){}}}};
 const context={document:doc,localStorage:{getItem:()=>null,setItem(){}},location:{hash:'#'+path},history:{replaceState(){}},window:{scrollTo(){}},console,confirm:()=>false,URL:{createObjectURL:()=>'',revokeObjectURL(){}},Blob, setTimeout(){}};
 vm.runInNewContext(js,context,{filename:'main.js',timeout:1500});
 assert.ok(app.innerHTML.length>1000,`empty ${path}`);
 assert.ok(app.innerHTML.includes('LAB-NUMÉRIQUE-IA'),path);
 console.log(`${path.padEnd(14)} ${app.innerHTML.length} chars`);
}
console.log('All 11 sections rendered successfully (headless JS mock).');
