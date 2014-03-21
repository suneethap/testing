define(
	[
		'backbone', 
		'marionette'
	], 
	function(
		Backbone, 
		Marionette
	) {
	
	var HeaderRegion = Backbone.Marionette.Region.extend({
		el: '.header'
	});
	var MainRegion = Backbone.Marionette.Region.extend({
		el: '.main'
	});
	var FooterRegion = Backbone.Marionette.Region.extend({
		el: '.footer'
	});
	var OneTeam = new Backbone.Marionette.Application();
	OneTeam.addRegions({
		headerRegion: HeaderRegion,
		mainRegion: MainRegion,
		footerRegion: FooterRegion
	});
	OneTeam.on('initialize:before', function(options) {
		console.log("1-Team application initialization started");
	});
	OneTeam.on('initialize:after', function(options) {
		console.log("1-Team application initialization finished");
	});
	OneTeam.on('start', function(options) {
		console.log("1-Team application started");
		if(Backbone.history){
			Backbone.history.start();
			console.log("1-Team history tracking started");
		}
	});
	OneTeam.addInitializer(function(options) {
		console.log("1-Team application add initializer called");
	});
	return OneTeam;
});

// EOF
