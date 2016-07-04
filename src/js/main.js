$(function(){
"use strict";

	$("header button").click( function(e){
		var id = e.target,
			ul;
		console.log($( "#headerItemNav" ));
		if( id.id === "headerNavBut" || id.parentNode.id === "headerNavBut"){
			$( "#headerItemNav" ).focus();
			console.log($( "#headerItemNav" ));
		}
		else if( id.id === "headerSocialBut" || id.parentNode.id === "headerSocialBut" ){
			ul = $( "#socialNav" );
			ul.trigger("focus");
		}
	});

	$( "#headerItemNav" ).focus(function(e){
		
		console.log($( "#headerItemNav" ));
		if( $("#headerNav").hasClass( "dropDownNav" ) )
			$("#headerNav").removeClass( "dropDownNav" );
		else
			$("#headerNav").addClass( "dropDownNav" );
	});


	$( "#headerItemNav" ).blur( function(e){
		$("#headerNav").addClass( "dropDownNav" );
	});

	$( "#socialNav" ).blur( function(e){
		$( this ).addClass( "dropDownNav" );
	});

	



	$('.cover').liCover({
	    parent: $("#galleryId li "),
	    position:'absolute',
	    veticalAlign:'middle',
	    align:'center'
	});

});
