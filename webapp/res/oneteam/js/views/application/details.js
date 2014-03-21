define(
	[
		'jquery', 
		'underscore', 
		'backbone', 
		'marionette', 
		'js/oneteam', 
		'js/models/helper', 
		'text!templates/application/details.html'
	], 
	function(
		$, 
		_, 
		Backbone, 
		Marionette, 
		OneTeam, 
		ModelHelper, 
		AppDetailViewTemplate
	) {
	return Backbone.Marionette.ItemView.extend({
		template: AppDetailViewTemplate,
		templateHelpers: ModelHelper,
		events: {
		}
	});
});

/* EOF */

