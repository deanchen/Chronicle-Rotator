/**
 * Module dependencies.
 */

var express = require('express');
var stylus = require('stylus');
// Path to our public directory

var pub = __dirname + '/public';

// Auto-compile sass to css with "compiler"
// and then serve with connect's staticProvider

var app = express.createServer();
app.use(express.compiler({ src: pub, enable: ['sass'] }));
app.use(app.router);
app.use(express.static(pub));
app.use(express.errorHandler({ dump: true, stack: true }));
app.set('view options', {
  layout: false
});

function compile(str, path, fn) {
  stylus(str)
    .set('filename', path)
    .set('compress', true)
    .render(fn);
};

// add the stylus middleware, which re-compiles when
// a stylesheet has changed, compiling FROM src,
// TO dest. dest is optional, defaulting to src

app.use(stylus.middleware({
    src: __dirname + '/views'
  , dest: __dirname + '/public'
  , compile: compile
}));

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

function imageElement(headline, date, caption, imageUrl) {
  this.headline = headline;
  this.date = date;
  this.caption = caption;
  this.imageUrl = imageUrl;
}

// Dummy users
var imageElements = [
    new imageElement(
    	'Slowing Down', 
    	'04/10/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner1.jpg'
    ),
  	new imageElement(
    	'Organized Food Fight', 
    	'04/11/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner2.jpg'
    ),
    new imageElement(
    	'Endangered Species', 
    	'04/12/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner3.jpg'
    ),  	
    new imageElement(
    	'Evolution', 
    	'04/13/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner4.jpg'
    ),  	
    new imageElement(
    	'Puzzled Putter', 
    	'04/14/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner5.jpg'
    ),  	
    new imageElement(
    	'Secret Habit', 
    	'04/15/09', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br /><a href="http://store.glennz.com/slowingdown.html" target="_blank">Artwork By Glenn Jones</a>',
    	'images/banner6.jpg'
    ),
];

app.get('/', function(req, res){
  res.render('rotator', {elements: imageElements});
});

app.listen(3000);
console.log('Express app started on port 3000');
