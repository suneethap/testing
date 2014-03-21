define(
	[
		'require', 
		'jquery', 
		'underscore', 
		'backbone', 
		'marionette', 
		'js/oneteam', 
		'js/routers/oneteamrouter', 
		'js/controllers/oneteamcontroller'
	], 
	function(
		require, 
		$, 
		_, 
		Backbone, 
		Marionette, 
		OneTeam, 
		Router, 
		Controller
	) {
	OneTeam.Controller = new Controller();
	OneTeam.Router = new Router({ controller: OneTeam.Controller });
	OneTeam.start();
	$(function() {
		console.log("1-TEAM application is ready.");
	});
});

// EOF

