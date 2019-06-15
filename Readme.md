
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
# Next.js MaterializeCSS with Bootstrap4 utilities starter app

## About

The tooling docs are still under construction but feel free to try out the application and suggest improvments.
if you are familiar with [Next.js](http://.nextjs.org) you will find it easy. if you do not know Next.js please visit the link below. Next.js is easy to learn provided you also already know [React](https://reactjs.org/).

## Boiler ingredients

1. Next.js
2. React
3. Materialize CSS
4. Bootstrap4 Utility Classes

## Theming

The project comes with 3 standard themes:
1. default ( Material UI theme )
1. blue-deeporange
2. indigo-blue
3. pink-indigo

## TODO

* Some content on the features page.
* Footer
* Data retrieval makeshift setup

### HOW TO RUN

Create directory where you want to clone;

Clone this URL: https://github.com/CliffCrerar/nextjs-materialize-css-app.git

Run `npm install` in cloned directory.

Run `npm run devSite` builds the dev app in a new or existing `.next` directory.

### Running production build

To create a production build run the following commands:

`npm run build` creates as dist directory with the production version. (_see below section on how to configure._)

## Build directory default config

Look inside the `next.config.js` for the 2 variables `productionBuildDirectory` and `developmentBuildDirectory` these are as their names suggest, the settings for the directories where the app will be built. 

For development it is set to the `Next.js` default standard `.next` directory. Out of the box the app will create a `dist` directory on the project root when you run `npm run build`. 

If you change these default settings remember to also update these in the `.gitignore` if you are planning on deploying to `Zeit`.

## Layout

You can configure the default layout by manipulating the code inside the `components/layout` directories of the project.

Create new themes by placing `.css` files creates with [material design pallete](https://www.materialpalette.com/) 


