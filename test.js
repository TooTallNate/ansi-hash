const hash = require('./')();
const chalk = require('chalk');

function log(v) {
  const color = hash(v);
  console.log(chalk.ansi256(color)(v), color);
}

for (let i = 'a'; i <= 'z'; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
  log(i);
}
log('test');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-r7hs6');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-ncf3r');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-w0dgt');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-2nfz5');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-3l5z0');
log('now-sync-c32bfb0f37036ba54d1b691f1775b1aa-7c2rg');

/*
// print out available colors
for (const color of hash.colors) {
  console.log(chalk.ansi256(color)(String(color)), color);
}
*/
