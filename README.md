# generator-openbot

> generating a file that will automatically help you open a website at a regular time

## Usage

### install

First, install [Yeoman](http://yeoman.io) and generator-openbot using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-openbot
```

### generate

Then execute the following command:

```bash
yo openbot
```

It will generate `autoOpen.html` file for you.

### run

#### run with VSCode

If you are using the VSCode, then you can download the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and use it to run `autoOpen.html`.

#### run with serve.js

Or you can choose `Need a live serve file` option then it will generate `serve.js` for you.

then you can run `autoOpen.html` file with the following command:

```bash
node serve.js
```

### Browser Limit

Newer browsers generally disable pop-ups by default. **Remember to set your browser to allow open pop-ups.**

Then everything should work!

![autoopen](https://github.com/yyz945947732/generator-openbot/blob/master/asset/autoopen.png)

## LICENSE

[MIT](https://github.com/yyz945947732/generator-openbot/blob/master/LICENSE)
