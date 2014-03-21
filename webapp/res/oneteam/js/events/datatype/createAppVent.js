define(
	[ 
		'backbone', 
		'marionette',
		'js/oneteam', 
		'js/models/datatypes', 
		'js/views/createApp'
	 ], 
	 function(
		Backbone, 
		Marionette, 
		OneTeam, 
		ModelDatatypes, 
		ViewCreateApp
	 ) {
	return Backbone.Wreqr.EventAggregator.extend({
		constructor: function() {			
			this.on("datatypes:details", function() {
				var apps = new ModelDatatypes();
				apps.fetch({
					success: function(response) {
						var json = response.toJSON();
						console.log("1-Team list of datatypes:" + JSON.stringify(json, undefined, 2));
						var view = new ViewCreateApp({
							collection: apps
						});
						OneTeam.mainRegion.show(view);
					}
				});
			});
		}
	});
});

// EOF

