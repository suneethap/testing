define(
	[
		'backbone', 
		'marionette', 
		'js/oneteam',  
		'js/views/header', 
		'js/views/footer', 
		'js/events/application/vent',
		'js/events/datatype/createAppVent'
	], 
	function(
		Backbone, 
		Marionette, 
		OneTeam, 
		ViewHeader, 
		ViewFooter, 
		ApplicationVent,
		DatatypeVent		
	) {
	return Backbone.Marionette.Controller.extend({
		initialize: function(options) {
			console.log("1-Team controller initialize called");
			OneTeam.ApplicationVent = new ApplicationVent();
			OneTeam.DatatypeVent 	= new DatatypeVent();
			OneTeam.headerRegion.show(new ViewHeader());
			OneTeam.footerRegion.show(new ViewFooter());
		},
		// routes, events
		home: function() {
			console.log("1-Team controller home route called");
			OneTeam.ApplicationVent.trigger("application:listing");
		}
	});
});

// EOF

