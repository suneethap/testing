define(['backbone', 'js/models/resource', 'js/models/application'], function(Backbone, Resource, Application) {
	return Backbone.Collection.extend({
		model: Application,
		url: function() {
			return Resource.applications();
		}, 
		initialize: function() {
			console.log("Applications Model initialized");
		}
	});
});

// EOF

