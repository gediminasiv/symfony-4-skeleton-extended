Symfony 4 skeleton app 2019
===========================

New projects come and go, but the fuss of creating base for them remains the same. For this reason I created this repository, that contains empty symfony project, that has most needed plugins already installed.

Contains:

* Encore installed.
* Bootstrap 4/ jQuery.
* Misc Symfony stuff like web server / debug toolbar / annotations, that do not come with symfony skeleton application.

Setup
=====

1. Run `composer install` to install php dependencies.
2. Run `yarn install` to install frontend dependencies.

Development
===========

1. `php bin/console server:start` to run out of the box web server.
2. `yarn run encore dev --watch` to auto recompile on frontend changes.

Deployment
==========

1. Just change the `.env` file to use environment variables instead and plug it in as any other website pointing to `public/index.php`.