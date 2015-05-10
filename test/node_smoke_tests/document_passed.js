/* jshint node: true */

"use strict";

require( "jsdom" ).env( "", function( errors, window ) {
	if ( errors ) {
		console.error( errors );
		process.exit( 1 );
	}

	var ensureJQuery = require( "./lib/ensure_jquery" ),
		ensureGlobalNotCreated = require( "./lib/ensure_global_not_created" ),
		jQuery = require( "../../dist/jquery.js" )( window );

	ensureJQuery( jQuery );
	ensureGlobalNotCreated( module.exports );
} );
