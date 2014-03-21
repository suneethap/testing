/**
 * App define configuration
 */

define(['jquery','jquery-ui','bootstrap','jquery-slimscroll','jasny-bootstrap'], function ($) {
	
    	 	var draggable = null;
			var newDev = null;
			var _ctrl_index = 0;
			var counter = 2;
    	 
			function makeDraggable() {
					$(".selectorField li").draggable({ helper: "clone",stack: "div",cursor: "move", cancel: null  });	
					//$(".widget-body").slideDown(200);
			}			
				
			function docReady() {
				
				console.log("document ready");	
				
				makeDraggable();
				
				$( "#droppedFields ul" ).droppable({
					
					  hoverClass: "hoverDroppable",
					  drop: function( event, ui ) {					  
						$( this ).find( ".placeholder" ).remove();
						draggable = ui.draggable;	
						draggable = $(ui.draggable).find(".modele").clone();
						draggable.removeClass("modele");
						draggable.removeClass("selectorField");
						draggable.addClass("droppedFields");
						draggable[0].id = draggable[0].id+(_ctrl_index++); // Attach an ID to the rendered control
						newDev = $("<li class='list'><div id="+draggable[0].id+" class="+draggable[0].id+"></div></li>" ).append(draggable).appendTo(this);
						newDev.find(".widget .widget-body").slideDown("fast");							
					},
					over: function(event, ui) {
						
						newDev.find(".widget .widget-body").slideUp("fast");
						
					}
				}).on("click", ".remove", function(event) { 
					
					$(this).parents(".list").remove();
					
				}).on("click", ".widget .tools .fa-angle-down, .widget .tools .fa-angle-up", function(event) {
					
					var el = $(this).parents(".widget").children(".widget-body");
					$("li div").find(".widget .widget-body").slideUp("fast");
					
					if ($(this).hasClass("fa-angle-down")) {
						$(this).removeClass("fa-angle-down").addClass("fa-angle-up");
						el.slideUp(200);
					} else {
						$(this).removeClass("fa-angle-up").addClass("fa-angle-down");
						el.slideDown(200);
					}	
					
				});					 	
			}
			
    
		$(document).ready(function() {
			
			docReady();
			
            $('#Text1').tooltip();
			$('#Category1').tooltip();
			$('#Date1').tooltip();
			$('#Progressbar1').tooltip();
			$('#inner-content').slimScroll({
				height:'400px'
			});
				
        });		
		
});