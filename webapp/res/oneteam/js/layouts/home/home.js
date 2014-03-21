define(['require', 'jquery', 'underscore', 'backbone'], function(require, $, _, Backbone) {
	var aTemplate = require('text!templates/landing/page.html');
	var aView = Backbone.View.extend({
		el: '.content',
		render: function() {
			$(this.el).html(aTemplate);
		}
	});
	return aView;
});

/* EOF */

