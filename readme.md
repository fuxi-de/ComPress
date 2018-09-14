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

This is configured to work out of the box, based on the beautiful Wordpress Plugin [Timber](https://www.upstatement.com/timber/), wich also has an awesome [documentation](https://timber.github.io/docs/) itself. Also for simple content creation and modular building the awesome [Layotter](http://docs.layotter.com/) Plugin and [ACF](https://www.advancedcustomfields.com/) are pulled in by default. Of course you can always swap these things out if you like. But I am going to assume you kept this as intended.

### First things First

If you are familiar with Wordpress development you will find yourself right at home. As mentioned above you can find your well known __wp-content__ directory just slightly differently named under __public/content__. This is where shit goes down most of the time. Composer will drop all your defined plugins right here and also as you might already have guessed your theme also goes right here under __public/content/themes__. Like mentioned, pretty familiar. 

## Config

On the root of the repository you can find a file named __production-config.php.sample__ by default this wordpress installation is configured to look for a config file called __local-config.php__ so just go ahead and rename the given file to that and insert your DB credentials etc.

If you are going to deploy what you've build you need to remove the __.sample__ flag on the server for wordpress to use the __production-config.php__. Of course you should add the production DB credentials in that file first. Also you need to edit the __/public/wp-config.php__ to hold the correct path in line __10__.
