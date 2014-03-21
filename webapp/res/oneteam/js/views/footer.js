define(['backbone', 'marionette', 'text!templates/footer/view.html'], function(Backbone, Marionette, FooterViewTemplate) {
	return Backbone.Marionette.ItemView.extend({
		template: FooterViewTemplate,
		events: {
			
		}
	});
});

/* EOF */

