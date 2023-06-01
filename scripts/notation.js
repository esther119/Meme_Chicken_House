import {annotate, annotationGroup} from "https://unpkg.com/rough-notation?module"
// import { annotate } from 'rough-notation';

const n3 = document.querySelector('h1');
const n4 = document.querySelector('span');
const a3 = annotate(n3, { type: 'box', color: 'orange' });
const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
a3.show();
a4.show();