define(['js/models/api'], function(Api) {
	return {
		applications: function() {
			var api = new Api();
			return api.uri() + '/applications';
		}, 
		datatypes: function() {
			var api = new Api();
			return api.uri() + '/datatypes';
		}
	};
});

// EOF

