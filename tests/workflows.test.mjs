import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Tests de comportement avec un DOM simulé ; le contrôle visuel reste distinct.
const source=fs.readFileSync('src/data.js','utf8').replaceAll('export const ','const ')+'\n'+fs.readFileSync('src/main.js','utf8').replace("import './style.css';",'').replace("import {slides,demos,cards,quiz,resourceLinks} from './data.js';",'');
function session({saved=null,blocked=false,hash=''}={}){
 const app={innerHTML:''};let cached='',nodes=[];const listeners={},downloads=[],blobs=new Map();
 let storage=saved;
 const decode=value=>value.replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&');
 const document={activeElement:null,body:{append(){},classList:{toggle(){}}},documentElement:{},addEventListener(type,fn){listeners[type]=fn}};
 function element(tag,attributes={}){return {tagName:tag.toUpperCase(),attributes,dataset:Object.fromEntries(Object.entries(attributes).filter(([k])=>k.startsWith('data-')).map(([k,v])=>[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),v])),disabled:'disabled' in attributes,checked:'checked' in attributes,value:attributes.value||'',textContent:'',getAttribute(key){return this.attributes[key]??null},setAttribute(key,value){this.attributes[key]=value},focus(){document.activeElement=this},click(){if(this.tagName==='A'&&this.download)downloads.push({name:this.download,blob:blobs.get(this.href)});else return this.onclick?.({preventDefault(){}})},remove(){},select(){this.focus()}}}
 function parse(){if(cached===app.innerHTML)return;cached=app.innerHTML;nodes=[];for(const match of cached.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)){const attrs={};for(const a of match[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g))attrs[a[1]]=decode(a[2]||'');nodes.push(element(match[1],attrs))}}
 document.querySelectorAll=selector=>{parse();if(selector==='form')return nodes.filter(n=>n.tagName==='FORM');if(selector.startsWith('#'))return nodes.filter(n=>n.attributes.id===selector.slice(1));const match=selector.match(/^\[([\w-]+)(?:="([^"]*)")?\]$/);return match?nodes.filter(n=>match[1] in n.attributes&&(match[2]===undefined||n.attributes[match[1]]===match[2])):[]};
 document.querySelector=selector=>selector==='#app'?app:document.querySelectorAll(selector)[0]||null;
 document.createElement=tag=>element(tag);
 const context=vm.createContext({document,localStorage:{getItem(){if(blocked)throw Error('blocked');return storage},setItem(key,value){if(blocked)throw Error('blocked');storage=value}},location:{hash},history:{replaceState(a,b,value){context.location.hash=value}},window:{scrollTo(){},addEventListener(type,fn){listeners[type]=fn}},confirm:()=>true,console,Blob,URL:{createObjectURL(blob){const key='blob:'+blobs.size;blobs.set(key,blob);return key},revokeObjectURL(){}},setTimeout(fn){fn()}});
 vm.runInContext(source,context,{timeout:2000});
 return {document,app,downloads,listeners,run:code=>vm.runInContext(code,context),saved:()=>storage,click:selector=>{const node=document.querySelector(selector);assert.ok(node,selector);node.focus();return node.click()},input(key,value){const node=document.querySelector('[data-field="'+key+'"]');assert.ok(node,key);node.value=value;node.oninput()}};
}

test('une modification de la note annule sa relecture et sa grille, sans effacer la preuve',()=>{
 const s=session({saved:JSON.stringify({reviewed:true,subject:'Sujet relu',learning:'Réflexion conservée'})});
 s.run("validCheck={0:true};go('atelier')");s.input('subject','Sujet modifié');
 assert.equal(s.run('form.reviewed'),false);assert.equal(s.run('Object.keys(validCheck).length'),0);assert.equal(s.run('form.learning'),'Réflexion conservée');
 s.run("form.reviewed=true;go('portfolio')");s.input('learning','Réflexion précisée');assert.equal(s.run('form.reviewed'),true);
});

test('un cas fictif reste identifié après adaptation, export et rechargement',async()=>{
 const s=session();await s.run("action('load-demo')");assert.match(s.app.innerHTML,/EXERCICE FICTIF/);
 s.input('subject','Sujet adapté pour l’exercice');await s.run("action('save-note');action('save-portfolio');action('save-grid')");
 for(const file of s.downloads){const content=await file.blob.text();assert.match(content,/EXEMPLE PROFESSIONNEL FICTIF/);assert.ok(content.includes('\n'));assert.ok(!content.includes('\\n'))}
 const reloaded=session({saved:s.saved(),hash:'#atelier'});assert.match(reloaded.run('noteMd()'),/EXEMPLE PROFESSIONNEL FICTIF/);
 await reloaded.run("action('new-subject')");assert.equal(reloaded.run('form.demoSource'),'');assert.equal(reloaded.run('form.subject'),'');
});

test('le logo et les liens directs ouvrent le bon contenu',async()=>{
 const s=session({hash:'#slides'});await s.click('[data-go="accueil"]');assert.equal(s.run('page'),'accueil');
 await s.run("action('suite')");assert.equal(s.run('activePrompt'),'suite');assert.match(s.app.innerHTML,/proposition de structure de fiche projet S10/);
 await s.run("action('work-step-2')");assert.equal(s.run('workStep'),2);assert.ok(s.document.querySelector('[data-check="reviewed"]'));
});

test('les données locales invalides et le stockage bloqué ne font pas planter le site',()=>{
 for(const saved of ['null','[]','{"name":42,"subject":{},"reviewed":"oui"}','{invalid']){const s=session({saved,hash:'#atelier'});assert.match(s.app.innerHTML,/Ma note de cadrage/);assert.equal(s.run('typeof form.name'),'string');assert.equal(s.run('form.reviewed'),false)}
 const s=session({blocked:true,hash:'#atelier'});assert.match(s.app.innerHTML,/Sauvegarde locale indisponible/);s.input('subject','Exercice sans sauvegarde');assert.match(s.document.querySelector('#work-preview').textContent,/Exercice sans sauvegarde/);
});

test('le focus reste sur la case et la réponse activées après le rendu',()=>{
 const s=session({hash:'#validation'});const box=s.document.querySelector('[data-valid="0"]');box.focus();box.checked=true;box.onchange();assert.equal(s.document.activeElement.getAttribute('data-valid'),'0');assert.notEqual(s.document.activeElement,box);
 s.run("go('quiz')");s.click('[data-answer="0:1"]');assert.equal(s.document.activeElement.getAttribute('data-answer'),'0:1');assert.equal(s.document.activeElement.getAttribute('aria-disabled'),'true');
 s.click('[data-answer="0:0"]');assert.equal(s.run('quizAnswers[0]'),1);
});

test('le parcours rend toutes les diapositives, étapes et corrections du quiz',async()=>{
 const s=session();for(let i=0;i<22;i++){s.run("page='slides';slide="+i+';render()');assert.match(s.app.innerHTML,/À vous/);assert.ok(!s.app.innerHTML.includes('undefined'))}
 for(let i=0;i<4;i++)for(let step=0;step<3;step++){s.run("page='demos';demo="+i+';demoStage='+step+';render()');assert.match(s.app.innerHTML,/fictif/i);assert.ok(!s.app.innerHTML.includes('undefined'))}
 s.run("go('quiz')");for(let i=0;i<10;i++)s.click('[data-answer="'+i+':'+s.run('quiz['+i+'].ok')+'"]');assert.match(s.app.innerHTML,/Résultat : 10\/10/);
 await s.run("action('save-quiz')");const quiz=await s.downloads.at(-1).blob.text();assert.match(quiz,/Score formatif : 10\/10\n/);assert.match(quiz,/non certifiante/);
});
