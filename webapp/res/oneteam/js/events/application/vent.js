define(
	[ 
		'backbone', 
		'marionette',
		'js/oneteam', 
		'js/models/application', 
		'js/models/applications', 
		'js/views/home', 
		'js/views/application/details'
	 ], 
	 function(
		Backbone, 
		Marionette, 
		OneTeam, 
		ModelApplication, 
		ModelApplications, 
		ViewHome, 
		ViewAppDetail
	 ) {
	return Backbone.Wreqr.EventAggregator.extend({
		constructor: function() {
			console.log("1-Team application vent constructor called");
			this.on("application:detail", function(appId) {
				var appModel = new ModelApplication({id: appId})
				appModel.fetch({
					success: function(response) {
						var json = response.toJSON();
						console.log("1-Team application details:" + JSON.stringify(json, undefined, 2));
						var view = new ViewAppDetail({
							model: appModel
						});
						OneTeam.mainRegion.show(view);
					}
				});
			});
			this.on("application:listing", function() {
				var apps = new ModelApplications();
				apps.fetch({
					success: function(response) {
						var json = response.toJSON();
						console.log("1-Team list of applications:" + JSON.stringify(json, undefined, 2));
						var view = new ViewHome({
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

