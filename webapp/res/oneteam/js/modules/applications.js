define(['require', 'jquery', 'underscore', 'backbone', 'marionette'], function(require, $, _, Backbone, Marionette) {
	var applications = Marionette.Module.extend({
		startWithParent: true,
		constructor: function(moduleName, marionetteApp, options) {
			console.log("applications module ctor");
		},
		initialize: function(options, marionetteApp, moduleName) {
			console.log("applications module init"); 
		},
		onStart: function(options) {
			console.log("applications module start");
		},
		onStop: function(options) {
			console.log("applications module stop");
		}
	});
	return applications;
});

// EOF

