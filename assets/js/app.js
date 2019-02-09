/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../css/app.css')
require('../css/dashboard.css')

const $ = require('jquery')

require('../../node_modules/popper.js/dist/popper.min.js')
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js')
const feather = require('../../node_modules/feather-icons/dist/feather.min.js')

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

feather.replace()