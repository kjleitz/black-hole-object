# black-hole-object

Create lightweight, chainable, callable, no-op black hole objects in JavaScript!

## The basics

This is an _extremely simple_ package, with no dependencies. It supplies a constructor function (`BlackHoleObject`) for an infinitely chainable, callable, and accessible black hole object.

Heavily inspired by a feature of the fantastic Ruby gem [Naught](https://github.com/avdi/naught#how-about-a-black-hole-null-object-that-supports-infinite-chaining-of-methods).

## Installation

Install via `npm`:

```
npm install black-hole-object
```

Alternatively, install via `yarn`:

```
yarn add black-hole-object
```

## Requirements

This package depends on [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) being supported on the client. If you're using Node.js v6.0.0 or above, **you're fine!** But if you're developing for the browser, please read further.

### Important note regarding use in the browser

While _most browsers today_ support this feature, older browsers will not. And, unfortunately, although there are polyfills for `Proxy`, they are limited in functionality and cannot support the kind of dynamic property accession that is required for this package. If you need to support older browsers... then don't make this a necessary facet of your project. Them's the breaks.

You can always add a conditional guard to ensure `window.Proxy` is defined before using it, but that just means you can't build an architecture around the assumption that this thing is going to be available in old browsers. Step away for a bit, give it a li'l time. Those browser versions will be soil soon enough.

You can check out the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Browser_compatibility) on MDN, or you can get a better picture of its browser support (complete with percentages and sliders) on [caniuse.com/#feat=proxy](https://caniuse.com/#feat=proxy). If your target browser supports `Proxy`, then it will support `black-hole-object`.

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

Want to use `console.log`, `console.warn`, etc., but only want logging in a development environment (not in production)?

```javascript
const debugMode = someConfig.environment === 'development';

const safeConsole = debugMode ? console : new BlackHoleObject();

// when someConfig.environment === 'production'...
// logs nothing to the console
safeConsole.log('hi')

// when someConfig.environment === 'development'...
// logs 'hi' to the console
safeConsole.log('hi')
```

Want to prevent API calls?

```javascript
const letsNotHammerTheServer = true;

const axios = letsNotHammerTheServer ? new BlackHoleObject() : require('axios');

// when letsNotHammerTheServer === true...
// does nothing
axios.get('https://example.com/some/url').then((response) => {
  // ...
}).catch((error) => {
  // ...
});

// when letsNotHammerTheServer === false...
// makes the actual API call
axios.get('https://example.com/some/url').then((response) => {
  // ...
}).catch((error) => {
  // ...
});
```

Want a permissive "default" object?

```javascript
// maybe you don't necessarily have a `user` object defined, so you do:

// before...
function setZipcodeOnUser(zipcode, user) {
  if (user && user.contactInfo && user.contactInfo.address) {
    user.contactInfo.address.zipcode = zipcode;
  }
}

// ...after!
function setZipcodeOnUser(zipcode, user = new BlackHoleObject()) {
  user.contactInfo.address.zipcode = zipcode;
}
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
