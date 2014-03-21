/*
* One Team main RequireJS configuration
*/

require.config({
	baseUrl: 'res/lib',
	paths: {
		'js': '../oneteam/js',
		'templates': '../oneteam/templates',
		'jquery': 'jquery-2.1.0/jquery-2.1.0',
		'jquery-ui': 'jquery-ui-1.10.4/js/jquery-ui-1.10.4.custom',
		'jquery.mobile': 'jquery.mobile-1.4.2/jquery.mobile-1.4.2',
		'jquery-slimscroll': 'jquery-slimscroll-1.3.0/jquery.slimscroll',
		'bootstrap': 'bootstrap-3.1.1/js/bootstrap',
		'jasny-bootstrap': 'jasny-bootstrap-3.1.0/js/jasny-bootstrap',
		'knockout': 'knockout-3.0.0/knockout-3.0.0',
		'underscore': 'underscore-1.6.0/underscore',
		'backbone': 'backbone-1.1.2/backbone',
		'text': 'require-2.1.11/text',
		'marionette': 'marionette-1.6.3/backbone.marionette',
		'backbone.wreqr': 'wreqr-1.0.0/backbone.wreqr',
		'backbone.babysitter': 'babysitter-0.1.0/backbone.babysitter',
		'handlebars': 'handlebars-1.3.0/handlebars-v1.3.0'
	},
	shim: {
		'bootstrap': {
			deps: [ 'jquery' ]
		},
		'knockout': {
			deps: [ 'jquery' ]
		},
		'jquery-ui': {
			deps: [ 'jquery' ]
		},
		'jquery.mobile': {
			deps: ['jquery']
		},
		'jquery-slimscroll': {
			deps: [ 'jquery' ]
		},
		'jasny-bootstrap': {
			deps: [ 'bootstrap' ]
		},
		'underscore': {
			/*exports: '_'*/
		},
		'backbone': {
			deps: [ 'underscore', 'jquery' ]
			/*exports: 'Backbone'*/
		},
		'handlebars': {
			deps: [ 'text' ]
		}
	},
	urlArgs: 'bust=v1'
});

// EOF
