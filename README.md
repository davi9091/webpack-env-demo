
# Webpack env demo

Demo of how webpack works with lazy React components determined by `process.env` variables

`yarn build` will run webpack build to `./build` folder and serve bundle analyzer.

```
  yarn
  yarn build:dev # will build with OPT=1 and display optional component
  yarn build:prod # will build with OPT=0
```
