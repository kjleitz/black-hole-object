# black-hole-object

Create lightweight, chainable, callable, no-op black hole objects in JavaScript!

## The basics

This is an _extremely simple_ package, with no dependencies. It supplies a constructor function (`BlackHoleObject`) for an infinitely chainable, callable, and accessible black hole object.

## Installation

Install via `npm`:

```
npm install black-hole-object
```

Alternatively, install via `yarn`:

```
yarn add black-hole-object
```

### Important note regarding use in the browser

This package depends on [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) being supported on the client. While _most browsers today_ support this feature, older browsers will not. And, unfortunately, although there are polyfills for `Proxy`, they are limited in functionality and cannot support the kind of dynamic property accession that is required for this package. If you need to support older browsers... then don't make this a necessary facet of your project. Them's the breaks.

You can always add a conditional guard to ensure `window.Proxy` is defined before using it, but that just means you can't build an architecture around the assumption that this thing is going to be available in old browsers. Step away for a bit, give it a li'l time. Those browser versions will be soil soon enough.

## Using `BlackHoleObject`

### Basic use

Check it out:

```javascript
import BlackHoleObject from 'black-hole-object';

const foo = new BlackHoleObject();

foo.bar
// => no errors

foo.bar('baz')
// => no errors

foo.bar.baz.what('up', 'dude').silly.hey("yeah")("I'm")("serious")[123].for.real();
// => no errors (!)

const earth = foo.or.whatever;

earth.turtle.turtle.turtle.turtle;
//=> all the way down
```

### Example use cases

Want to use `console.log`, `console.warn`, etc., but only have logging in a development environment (not in production)?

```javascript
// someConfig.environment === 'production'

const debugMode = someConfig.environment === 'development';

const safeConsole = debugMode ? console : new BlackHoleObject();

safeConsole.log('hi')
// logs nothing to the console
```

```javascript
// someConfig.environment === 'development'

const debugMode = someConfig.environment === 'development';

const safeConsole = debugMode ? console : new BlackHoleObject();

safeConsole.log('hi')
// logs 'hi' to the console
```

Want to prevent API calls?

```javascript
const letsNotHammerTheServer = true;

const axios = letsNotHammerTheServer ? new BlackHoleObject() : require('axios');

// does nothing
axios.get('https://example.com/some/url').then((response) => {
  // ...
}).catch((error) => {
  // ...
});
```

```javascript
const letsNotHammerTheServer = false;

const axios = letsNotHammerTheServer ? new BlackHoleObject() : require('axios');

// makes the actual API call
axios.get('https://example.com/some/url').then((response) => {
  // ...
}).catch((error) => {
  // ...
});
```

The world is your oyster.

```javascript
const oyster = new BlackHoleObject();

oyster.oyster.oyster.the.world.isMy('oyster');
//=> no complaints
```

## Contributing

Bug reports and pull requests for this project are welcome at its [GitHub page](https://github.com/kjleitz/black-hole-object). If you choose to contribute, please be nice so I don't have to run out of bubblegum, etc.

## License

This project is open source, under the terms of the [MIT license](https://opensource.org/licenses/MIT).
