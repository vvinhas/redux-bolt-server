# Redux Bolt (Server Event Handler)

This package provides a SocketIO callback to handle [Redux Bolt](http://github.com/vvinhas/redux-bolt) events on the server side. Check the package page for more details.

### WIP

This package is under heavy development. Don't use it in a production environment unless you really know what you're doing.

## Installation

To install the stable version of `redux-bolt-server` using NPM:

```
npm run --save redux-bolt-server
```

You can also use `yarn`

```
yarn add redux-bolt-server
```

## Usage

After requiring the package, you'll use the `eventsHandler` function as a callback for `io.on` connection event.

```js
var bolt = require('redux-bolt-server')

io.on('connection', bolt.eventsHandler)
```

After that, you can start emiting events to the server using `redux-bolt`

## Debug

This package provides an easy way to debug all your Bolt Events using the [debug](https://github.com/visionmedia/debug) package.

To do so, you must start your service setting `DEBUG` to `bolt`, like so:

```
DEBUG=bolt node server.js
```

## License

MIT
