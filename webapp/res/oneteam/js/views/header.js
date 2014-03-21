define(['backbone', 'marionette', 'text!templates/header/view.html'], function(Backbone, Marionette, HeaderViewTemplate) {
	return Backbone.Marionette.ItemView.extend({
		template: HeaderViewTemplate,
		events: {
			
		}
	});
});

/* EOF */

