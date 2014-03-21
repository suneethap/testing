define(['require', 'jquery', 'underscore', 'backbone', 'marionette'], function(require, $, _, Backbone, Marionette) {
	var application = Marionette.Module.extend({
		startWithParent: true,
		constructor: function(moduleName, marionetteApp, options) {
			console.log("application module ctor");
		},
		initialize: function(options, marionetteApp, moduleName) {
			console.log("application module init"); 
		},
		onStart: function(options) {
			console.log("application module start");
		},
		onStop: function(options) {
			console.log("application module stop");
		}
	});
	return application;
});

// EOF

