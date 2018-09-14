# ComPress

This is a composer based Wordpress Framework. The wp-content directory lives outside the actual WP Core. Wordpress and the plugins are pulled in via [Composer](https://getcomposer.org/). So having it installed is required for this to work.

## Installation

Clone this repository into your webroot.

```shell
git clone git@github.com:fuxi-de/ComPress.git
cd ComPress/
composer install
```

Running the
```shell
composer install
```
command will install wordpress and all dependencies specified in the __composer.json__ file. It will create a __public__ directory and the WP core can be found in __public/cms__ while the __wp-content__ directory lives outside the core in __public/content__ to separate our code from the core.

## Building

ComPress is configured to work out of the box, based on the beautiful Wordpress Plugin [Timber](https://www.upstatement.com/timber/), which also has an awesome [documentation](https://timber.github.io/docs/) itself. Also for simple content creation and modular building the awesome [Layotter](http://docs.layotter.com/) Plugin and [ACF](https://www.advancedcustomfields.com/) are pulled in by default. Of course you can always swap these things out if you like. But I am going to assume you kept this as intended.

### First things First

If you are familiar with Wordpress development you will find yourself right at home. As mentioned above you can find your well known __wp-content__ directory just slightly differently named under __public/content__. This is where shit goes down most of the time. Composer will drop all your defined plugins right here and, as you might already have guessed, your theme also goes right here under __public/content/themes__. Like mentioned, pretty familiar.

### Templating

By Default a theme that is based on the Timber [Startertheme](https://github.com/timber/starter-theme.git) is installed. Of course you can swap that out for your desired theme as well. Anyways... if you use the default one you will find all the (template) __.php__ files in the themes root and the corresponding views under __/templates__. We will stay true to [Timber](https://timber.github.io/docs/guides/custom-page-templates/) here and separate logic (.php) from our presentation layer (/templates/.twig).

### Frontend Assets

On the themes root you can find an *package.json* if you are familiar with [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/) you already know what to do. In here you can define all of your needed Assets for building the frontend of your site. For example [bootstrap](getbootstrap.com) is pulled in by default.
By running:

```shell
yarn install
```

all these dependencies will be installed. Your uncompiled frontend assets will live in __/src/scss__ for sass and __/src/js__ for js. As taskrunner for these we will use [gulp](https://gulpjs.com/). There is an own directory on the themes root called __/gulp__ in there, there is an own *package.json* for the needed dependencies of gulp. If you want to compile your assets just run one of the in *gulpfile.js* defined tasks. For example:

```shell
gulp watch
```

The compiled assets which can be included in your site are then placed in __/dist__.

### The modular Approach

This is where Layotter enters the stage! By using Layotter we are able to take a more modular approach when developing and also content creation with the page builder will be much easier and slicker. If you want to dive deeper into how exactly Layotter works take a look at its documentation [here](http://docs.layotter.com/). Basically it takes a defined by slug ACF Fieldgroup, returns a frontend view and a view for the Wordpress admin panel and remembers those as a module.

We will combine this with Timber and let Timber do the rendering of those views. Therefore a module will consist at least of a *.php* file to do all the logic and register the Layotter element and also of a corresponding *.twig* file which we call from timbers ::render function in the *.php* file. We could also include another *.twig* file for the admin view.

The modules are placed under __templates/modules__ and a *layotter.php* file will most likely look something like this:

```php
<?php
class Quote_Element extends Layotter_Element
{
    protected function attributes() {
        $this->title       = 'Quote';
        $this->description = 'Quote Element mit einem Kreis als Hintergrund';
        $this->icon        = 'font';
        $this->field_group = 'group_5b96829569b7d';
    }

    protected function frontend_view($fields) {
      Timber::render('quote.twig', $fields);
    }

    protected function backend_view($fields) {
      Timber::render('quote.twig', $fields);
    }
}

Layotter::register_element('quote', 'Quote_Element');
```


The corresponding *.twig* File for the frontend view would look something like this:

```html
<div class="container">
  <p class="quote">{{quote}}</p>
</div>
```

Timber will render the specified *.twig* File using __$fields__ as context. __$fields__ is an array consisting of the fields specified in the ACF fieldgroup we told Layotter to use for the module. The key will always be the slug of the fieldgroup and the value its given value of course. In the *.twig* File you can access this value through its given key from the __$fields__ array. __Of course these values could be modified before passing them to the view__.

## Config and Deployment

On the root of the repository you can find a file named __production-config.php.sample__ by default this wordpress installation is configured to look for a config file called __local-config.php__ so just go ahead and rename the given file to that and insert your DB credentials etc.

If you are going to deploy what you've build you need to remove the __.sample__ flag on the server for Wordpress to use the __production-config.php__. Of course you should add the production DB credentials in that file first. Also you need to edit the __/public/wp-config.php__ to hold the correct path in line __10__. This will be automated in the future.
