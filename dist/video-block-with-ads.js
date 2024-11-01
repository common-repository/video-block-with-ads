
jQuery( 'video.video-js' ).each( function() {
	var that = this;
	var options = jQuery( this ).data( 'vbwa' );
	var adOptions = jQuery( this ).data( 'ad_options' );

	var player = videojs( this, options, function() {
		// Player Ready
		if ( adOptions ) {
			this.ima( adOptions.ima );
		}
	} );
} );
