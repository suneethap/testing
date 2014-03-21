define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			version: 'v1',
			path: 'api',
			context: 'oneteam'
		},
		initialize: function() {
			//console.log("Api Model initialized");
			var pathname = new String(window.location.pathname);
			//console.log("window location pathname:" + pathname);
			var pathnameArr = pathname.split('/');
			var theContext = pathnameArr[1];
			//console.log("webapp context:" + theContext);
			this.set({ context: theContext });
		},
		uri: function() {
			var apiURI = new String('/' + this.get('context') + '/' + this.get('path') + '/' + this.get('version'));
			//console.log("Api URI:" + apiURI);
			return apiURI;
		}
	});
});

// EOF

