
var GUI = {
	init: function() {
	
	},
	showWinner: function(name) {
		jQuery('body').append("<br />the winner now is: " + name);
	},
	reset: function() {
		jQuery('body').html("");
	}
};

var expressjs = require('express');

var SERVER = {
	express: null,
	init: function() {
		this.express = expressjs();
		this.express.get('/', function(req, res){
			res.send('<form action="/click" method="GET">Your name:<input type="text" name="fullname" value="kris"/><button>click</button></form> <a href="/reset">reset</a>');
		});
		this.express.get('/click', function(req, res){
			GUI.showWinner(req.query["fullname"]);
			res.redirect('/');
		});
		this.express.get('/reset', function(req, res){
			GUI.reset();
			res.redirect('/');
		});
		this.express.listen(3000);
		console.log('Listening on port 3000');
	}
};


jQuery(document).ready(function(){
	GUI.init();
	SERVER.init();
});

