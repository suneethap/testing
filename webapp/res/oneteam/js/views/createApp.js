  define(
	[
	 	'backbone', 
	 	'marionette',
	 	'text!templates/createApp/createApp.html', 
	 	'js/apps/apps'
	 ], 
  function(
		Backbone,
		Marionette, 
		CreateAppTemplate, 
		Apps
	) {
	return Backbone.Marionette.ItemView.extend({
		template: CreateAppTemplate,
		events: {
		}
	});
});

/* EOF */

