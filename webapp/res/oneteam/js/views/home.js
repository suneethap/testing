define(
	[
		'jquery', 
		'underscore', 
		'backbone', 
		'marionette', 
		'js/oneteam', 
		'text!templates/home/view.html'
	], 
	function(
		$, 
		_, 
		Backbone, 
		Marionette, 
		OneTeam, 
		HomeViewTemplate
	) {
	return Backbone.Marionette.ItemView.extend({
		template: HomeViewTemplate,
		events: {
			"click .appdetail"	: 	"applicationDetailClicked",
			"click .appBuilder"	: 	"appBuilderDetailClicked"
		},
		applicationDetailClicked: function(event) {
			event.preventDefault();
			console.log('clicked on application for details');
			var appId = $(event.currentTarget).data("id");
			OneTeam.ApplicationVent.trigger("application:detail", appId);
		},
		appBuilderDetailClicked: function(event) {
			event.preventDefault();
			console.log('clicked on Create New App for AppBuilder details');
			OneTeam.DatatypeVent.trigger("datatypes:details");
		}
	});
});

/* EOF */

