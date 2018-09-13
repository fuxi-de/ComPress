# Gulp

Gulp is a task runner built on Node.js and npm.
We use it to ...

+ check for errors
+ compile and minify less-files into a single stylesheet (styles.min.css)
+ compile and minify javascript-files into a single scripts-file (script.min.js)
+ create source-maps
+ create svg-symbol- and spritesheets
+ watch files
+ livereload browser

**More Information:** [https://gulpjs.com/](https://gulpjs.com/)

<br/>

## Using Gulp

**Clone** this repo to your project or template folder.
Ideally to the root of your template (where your css- and js-folder is located).

```
$ git clone git@gitlab.com:schumacher-visuell/gulp.git
```

Open your terminal and **cd** into the folder

```
$ cd /path/where/you/cloned/gulp/
```

Open your terminal and and run the command **npm install**.<br/>
This will download all **node-modules** and dependencies from the **package.json**.

```
$ npm install
```

Now simply run the command 'gulp'. This will start the **default-task**. <br/>
Keep the terminal open and try editing the less- and script-files.
```
$ gulp
```
![Running Gulp](img/gulp_start.png?raw=true "Gulp")

<br/>

You can also run the following **commands** separately.

```
// create a beautified stylesheet inside the css-dir + sourcemap
$ gulp styles

// create a minified stylesheet inside the css-dir + sourcemap
$ gulp styles-minified

// create a minified scriptsfile inside the js-dir + sourcemap
$ gulp scripts

// create a svg-spritesheet inside assets > img > icons > spritesheet > svg
// it combines the svg-files inside assets > img > icons > origin
$ gulp svg-sprites

// create a svg-symbolsheet inside assets > img > icons > symbols > svg
// it combines the svg-files inside assets > img > icons > origin
$ gulp svg-symbols
```

<br/>

## Folderstructure

The **gulpfile.js** from this repository is optimized for our basic template-structure.<br/>
But you can edit the gulpfile to fit your specific structure.<br/>
Just use the following structure if you dont want to waste time on editing the gulpfile:

![Templatestructure](img/folderstructure.png?raw=true "Gulp")

+ **Assets**<br/>
place your assets inside this folder
    
+ **css**<br/>
minified stylesheets gets saved to this directory (style.min.css) - Files in here are created by gulp

+ **gulp**<br/>
this folder should contain the gulpfile.js, package.json as well as the node modules

+ **js**<br/>
minified scripts are saved to this directory (scripts.min.js) - Files in here are created by gulp

+ **less**<br/>
directory containing less-files. It should contain a file named "**app.less**" with all imports

+ **modules**<br/>
place modules inside here. Every module should have its own folder and can contain .less, .js and .php/html files

+ **uncompressed-js**<br/>
directory containing javascript (pre-compiled). It should contain a file named **"scripts.js"** with all includes



