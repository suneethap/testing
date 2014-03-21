define(['backbone', 'js/models/resource'], function(Backbone, Resource) {
	return Backbone.Model.extend({
		urlRoot: function() {
			return Resource.applications();
		}, 
		initialize: function() {
			console.log("Application Model initialized");
		}
	});
});

// EOF

