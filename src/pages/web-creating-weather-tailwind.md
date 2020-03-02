started with
```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Weather</title>
    <meta name="description" content="Weather" />
    <meta name="author" content="Bryce Hipp" />

    <link rel="stylesheet" href="./style.scss" />
  </head>

  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

using parcel

```bash
npm init -y
npm i -D parcel-bundler
```

Add npm script
```json
"scripts": {
  "dev": "parcel index.html"
},
```

Instructions on https://tailwindcss.com/docs/installation

Using async await
```shell
npm install --save-dev babel-plugin-transform-runtime babel-runtime
```

Create .babelrc file and add:

```json
{
    "plugins": [
        ["transform-runtime",
        {
            "polyfill": false,
            "regenerator": true
        }]
    ]
}
```

 Build out HTML
 
 
Add build step

```json
"scripts": {
  "dev": "parcel src/index.html",
  "build": "parcel build src/index.html"
},
```

Controlling Tailwind filesize
https://tailwindcss.com/docs/controlling-file-size/

```shell
npm install @fullhuman/postcss-purgecss --save-dev
```

```js
// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
```

Test out build

```shell
npm install --save-dev serve
npm run build && serve dist/index.html
```

 
Add build test script

```json
"scripts": {
  "dev": "parcel src/index.html",
  "build": "parcel build src/index.html",
  "serve": "npm run build && serve dist/"
},
```
