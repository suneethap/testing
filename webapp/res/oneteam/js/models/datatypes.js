define(['backbone', 'js/models/resource', 'js/models/datatype'], function(Backbone, Resource, Datatype) {
	return Backbone.Collection.extend({
		model: Datatype,
		url: function() {
			return Resource.datatypes();
		}, 
		initialize: function() {
			console.log("Datatypes Model initialized");
		}
	});
});

// EOF

