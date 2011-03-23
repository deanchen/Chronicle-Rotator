/**
 * @author Dean Chen
 */
var imageElements = {};
var exports = module.exports = imageElements;

function imageElement(headline, alternate, caption, imageUrl) {
  this.headline = headline;
  this.alternate = alternate;
  this.caption = caption;
  this.imageUrl = imageUrl;
}

var set1 = [];

imageElements.set1 = function() {
	return set1;
};

set1 = [new imageElement(
    	'Slowing Down', 
    	'even', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner1.jpg'
    ),
  	new imageElement(
    	'Organized Food Fight', 
    	'odd', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner2.jpg'
    ),
    new imageElement(
    	'Endangered Species', 
    	'even', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner3.jpg'
    ),  	
    new imageElement(
    	'Evolution', 
    	'odd', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner4.jpg'
    ),  	
    new imageElement(
    	'Puzzled Putter', 
    	'even', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner5.jpg'
    ),  	
    new imageElement(
    	'Secret Habit', 
    	'odd', 
    	'Autem conventio nimis quis ad, nisl secundum sed, facilisi, vicis augue regula, ratis, autem. Neo nostrud letatio aliquam validus eum quadrum, volutpat et.<br />',
    	'images/banner6.jpg'
    ),
];
