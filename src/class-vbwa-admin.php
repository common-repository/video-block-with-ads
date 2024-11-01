<?php

class VBWA_Admin {
	private $capability = 'manage_options';

	public function __construct() {
		add_action( 'admin_init', array( $this, 'init' ) );
		add_action( 'admin_post', array( $this, 'save' ) );
		add_action( 'admin_menu', array( $this, 'add_menu' ) );
	}

	public function init() {

	}

	public function add_menu() {
		add_options_page( 'Video Player Settings', 'Video Player', $this->capability, 'vbwa_settings', array( $this, 'render_page' ) );
	}

	public function save() {
		$nonce = filter_input( INPUT_POST, 'vbwa_nonce', FILTER_SANITIZE_STRING );
		if ( $nonce && wp_verify_nonce( $nonce, 'vbwa-settings' ) ) {
			$options = array(
				'active_skin'      => sanitize_text_field( filter_input( INPUT_POST, 'active_skin', FILTER_SANITIZE_STRING ) ),
				'default_adtag'    => esc_url_raw( filter_input( INPUT_POST, 'default_adtag', FILTER_SANITIZE_STRING ) ),
				'dfp_adtag'        => (bool) filter_input( INPUT_POST, 'dfp_adtag', FILTER_VALIDATE_BOOLEAN ),
				'vastloadtimeout'  => absint( filter_input( INPUT_POST, 'vastloadtimeout', FILTER_SANITIZE_STRING ) ),
				'loadvideotimeout' => absint( filter_input( INPUT_POST, 'loadvideotimeout', FILTER_SANITIZE_STRING ) ),
				'timeout'          => absint( filter_input( INPUT_POST, 'timeout', FILTER_SANITIZE_STRING ) ),
				'hls'              => (bool) filter_input( INPUT_POST, 'hls', FILTER_VALIDATE_BOOLEAN ),
			);

			if ( ! $options['vastloadtimeout'] ) {
				$options['vastloadtimeout'] = 5000;
			}

			if ( ! $options['loadvideotimeout'] ) {
				$options['loadvideotimeout'] = 8000;
			}

			if ( ! $options['timeout'] ) {
				$options['timeout'] = 5000;
			}

			$options = apply_filters( 'vbwa_save_settings', $options );

			update_option( 'vbwa-settings', $options );

			if ( ! isset( $_POST['_wp_http_referer'] ) ) { // Input var okay.
				$_POST['_wp_http_referer'] = wp_login_url();
			}

			$url = sanitize_text_field(
				wp_unslash( $_POST['_wp_http_referer'] ) // Input var okay.
			);

			wp_safe_redirect( urldecode( $url ) );
			exit;
		} else {
			wp_die( 'Invalid nonce' );
		}
	}

	public function render_page() {
		$skins    = vbwa_get_skins();
		$settings = vbwa_get_settings();
		?>
		<div class="wrap">
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
			<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<table class="form-table" >
					<tr>
						<th>
							Active Skin
						</th>
						<td>
							<select name="active_skin">
								<?php
								foreach ( $skins as $skin => $url ) {
									?>
									<option value="<?php echo esc_attr( $skin ); ?>" <?php selected( $skin, $settings['active_skin'] ); ?> ><?php echo esc_html( $skin ); ?></option>
									<?php
								}
								?>
							</select>
						</td>
						<td>
							All player will use the same skin. You can add more skins using the <code>vbwa_skins</code> filter.
						</td>
					</tr>
					<tr>
						<th>
							Default Ad Tag
						</th>
						<td>
							<input name="default_adtag" type="text" style="width: 100%;" value="<?php echo esc_attr( $settings['default_adtag'] ); ?>">
						</td>
						<td>
							Individually set ad tags will override the default on a per video basis.
						</td>
					</tr>
					<tr>
						<th>
							Is this a DFP ad tag?
						</th>
						<td>
							<input name="dfp_adtag" type="checkbox" <?php echo checked( $settings['dfp_adtag'] ); ?> value="1">
						</td>
						<td>
							<em>In Development.</em><br><del>We can automatically pass post parameter as custom targeting to the adtag for DFP</del>
						</td>
					</tr>
					<tr>
						<th>
							VAST load timeout (ms)
						</th>
						<td>
							<input name="vastloadtimeout" type="text" value="<?php echo esc_attr( $settings['vastloadtimeout'] ); ?>">
						</td>
						<td>
							How long to wait for the server to respond a request directly after its been made. Default: 5000.
						</td>
					</tr>
					<tr>
						<th>
							loadVideo timeout (ms)
						</th>
						<td>
							<input name="loadvideotimeout" type="text" value="<?php echo esc_attr( $settings['loadvideotimeout'] ); ?>">
						</td>
						<td>
							Once the request has been made, how long to wait for the video ad to start playing. Default: 8000.
						</td>
					</tr>
					<tr>
						<th>
							Max timeout (ms)
						</th>
						<td>
							<input name="timeout" type="text" value="<?php echo esc_attr( $settings['timeout'] ); ?>">
						</td>
						<td>
							Maximum time to wait for an ad to start playing (think of it as a combined of the two timeouts above). Default: 5000.<br/>
							<em>For how to choose the right timeouts try the procedure <a href="https://federicojacobi.com/how-to-optimize-video-ad-timeouts/">on this link.</a></em>
						</td>
					</tr>
					<tr>
						<th>
							Enable HLS playback?
						</th>
						<td>
							<input name="hls" type="checkbox" <?php echo checked( $settings['hls'] ); ?> value="1">
						</td>
						<td>
							If you don't need HLS, leave this off.
						</td>
					</tr>

				</table>
				<?php
				wp_nonce_field( 'vbwa-settings', 'vbwa_nonce' );

				submit_button();
				?>
			</form>
		</div>
		<?php
	}
}
