$(function(){
"use strict";

	$("button").click( function(e){
		e.preventDefault();
		var id = e.target,
			ul;

		//console.log( id.id );
		if( id.id === "headerNavBut" ){
			ul = $( ".headerNav" );
			if( ul.hasClass( "dropDownNav" ) )
				ul.removeClass( "dropDownNav" );
			else
				ul.addClass( "dropDownNav" );
		}
		else if( id.id === "headerSocialBut" ){
			ul = $( ".socialNav" );
			if( ul.hasClass( "dropDownNav" ) )
				ul.removeClass( "dropDownNav" );
			else
				ul.addClass( "dropDownNav" );
		}
	});

});
