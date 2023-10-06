# generator-openbot

> generating a file that will automatically help you open a website at a regular time

## Usage

First, install [Yeoman](http://yeoman.io) and generator-openbot using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-openbot
```

Then generate your new project:

```bash
yo openbot
```

It will generate `autoOpen.html` file for you.

If you are using the VSCode, then you can download the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and use it to run `autoOpen.html`.

Or you can choose `Need a live serve file` option then it will generate `serve.js` for you.

then you can run `autoOpen.html` file with the following command:

```bash
node serve.js
```

**Remember to set the browser to allow your url to open pop-ups.**

[![autoopen]([图片地址](https://github.com/yyz945947732/generator-openbot/blob/master/asset/autoopen.png))](https://github.com/yyz945947732/generator-openbot/blob/master/asset/autoopen.png)

Then everything should work!

## LICENSE

[MIT](https://github.com/yyz945947732/generator-openbot/blob/master/LICENSE)
