# bind-operator

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/bind-operator.svg)](https://greenkeeper.io/)

Transpiler for http://wiki.ecmascript.org/doku.php?id=strawman:bind_operator

[![Build Status](https://img.shields.io/travis/ForbesLindesay/bind-operator/master.svg)](https://travis-ci.org/ForbesLindesay/bind-operator)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/bind-operator.svg)](https://david-dm.org/ForbesLindesay/bind-operator)
[![NPM version](https://img.shields.io/npm/v/bind-operator.svg)](https://www.npmjs.org/package/bind-operator)

## Example

You could write code like:

```js
import {unique, flatten} from "oonderscore";

[1, 2, 3, [3, 2], [1]]::flatten()::unique();
// => [1, 2, 3]
```

This gets transformed into:

```js
import {unique, flatten} from "oonderscore";

unique.call(flatten.call([1, 2, 3, [3, 2], [1]]));
// => [1, 2, 3]
```

You can also write code like:

```js
var clickButton = button::click;
```

which gets transformed to:

```js
var clickButton = click.bind(button);
```

## Installation

    npm install bind-operator

or

    npm install --global bind-operator

## Usage

Via the command line:

```
bind-operator input.js output.js
bind-operator < input.js > output.js
```

Via browserify:

Just specify the transform name as `bind-operator`.

## License

  MIT
