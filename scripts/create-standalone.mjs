import fs from 'node:fs';import path from 'node:path';
const root=process.cwd();
const content=(v)=>fs.readFileSync(path.join(root,v),'utf8');
const style=content('src/style.css').replace(/^@import url\(.*?\);\s*/m,'');
const data=content('src/data.js').replaceAll('export const ','const ');
const js=content('src/main.js').replace("import './style.css';",'').replace("import {slides,demos,cards,quiz,resourceLinks} from './data.js';",'');
let html=content('index.html');
const logo=fs.readFileSync(path.join(root,'public/assets/logo-LN-IA.png')).toString('base64');
const poster=fs.readFileSync(path.join(root,'public/assets/affiche-module-03.webp')).toString('base64');
let bundledJs=data+'\n'+js;
for(const name of ['affiche-module-03-nouvelle.webp','affiche-s09-six-elements.webp','affiche-s10-fiche-projet.webp']){bundledJs=bundledJs.replaceAll('./assets/'+name,'data:image/webp;base64,'+fs.readFileSync(path.join(root,'public/assets',name)).toString('base64'));}
const allJs=bundledJs.replaceAll('./assets/logo-LN-IA.png','data:image/png;base64,'+logo).replaceAll('./assets/affiche-module-03.webp','data:image/webp;base64,'+poster).replaceAll('</script>','<\\/script>');
html=html.replace('<script type="module" src="/src/main.js"></script>',`<style>${style}</style><script>${allJs}</script>`);
fs.writeFileSync(path.join(root,'APERCU-AUTONOME-SEANCE-09.html'),html);
console.log('Aperçu autonome créé :',Math.round(fs.statSync('APERCU-AUTONOME-SEANCE-09.html').size/1024),'KiB');
