define(['backbone', 'js/models/resource'], function(Backbone, Resource) {
	return Backbone.Model.extend({
		urlRoot: function() {
			return Resource.datatypes();
		}, 
		initialize: function() {
			console.log("Datatype Model initialized");
		}
	});
});

// EOF

