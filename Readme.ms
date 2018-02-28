# ansi-hash

```js
const chalk = require('chalk');
const hash = require('ansi-hash')();

function log(namespace, line) {
  const color = chalk.ansi256(hash(namespace));
  console.log(`[${color(namespace)}] ${line}`);
}

log('server1', 'Hello');
```

<img width="273" alt="screen shot 2018-02-27 at 5 58 47 pm" src="https://user-images.githubusercontent.com/71256/36765831-fbccef1e-1be7-11e8-9cde-c5df62ab6573.png">
