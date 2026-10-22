import test from 'node:test';
import assert from 'node:assert/strict';
import {slides,cards,quiz,demos} from '../src/data.js';
test('contenus pédagogiques complets',()=>{assert.equal(slides.length,22);assert.equal(cards.length,12);assert.equal(quiz.length,10);assert.equal(demos.length,4);});
test('notes et rubriques des diapos',()=>{for(const s of slides){assert.ok(s.title&&s.speaker&&s.lede&&s.take);assert.ok(s.points.length>=3)}});
test('réponses quiz valides',()=>{for(const q of quiz){assert.ok(Number.isInteger(q.ok)&&q.ok>=0&&q.ok<q.a.length);assert.ok(q.why)}});
test('cas fictifs complets',()=>{for(const d of demos){for(const k of ['subject','public','need','objective','result','action','risk'])assert.ok(d[k])}});
