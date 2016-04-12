# React Xamarin Prototyping

### Getting Started
To begin compilation and transpilation, run:
+ `git clone https://github.com/joevbruno/xamarin-react.git`
+ `cd xamarin-react`
+ `npm install`

### After Install
+ `npm run server` fires up the node server
+ in a new tab, run 'npm start' to begin webpack watching.

Note: running `npm run prod` will generate minified files for production.

Webpack should be re-compiling on save and the node server will serve files built by webpack from the `dist` folder.

Also, there is a index.html file in dist, which includes the `main.bundle.js` and `main.css` files.
Once the node server is running, this file can be loaded by visiting `localhost:3000`
