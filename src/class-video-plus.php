<?php

class Video_Plus {
	private $shortcode = 'vbwa';
	private $skins;


	public function __construct() {
		add_action( 'init', array( $this, 'init' ) );
		add_action( 'wp', array( $this, 'maybe_include_vjs' ) );
		add_shortcode( $this->shortcode, array( $this, 'do_shortcode' ) );
	}

	public function maybe_include_vjs() {
		if ( ! is_singular() ) {
			return;
		}

		global $post;
		if ( has_shortcode( $post->post_content, 'video-with-ads' ) || has_block( 'video-plus/video-with-ads' ) ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		}
	}

	public function enqueue_scripts() {
		$settings = vbwa_get_settings();

		// VideoJS
		wp_enqueue_style( 'video_js_css', plugins_url( 'dist/video-js.min.css', dirname( __FILE__ ) ) );
		wp_enqueue_script( 'video_js', plugins_url( 'dist/video.js', dirname( __FILE__ ) ), array() );

		// HLS Contrib
		if ( $settings['hls'] ) {
			wp_enqueue_script( 'video_js_hls_contrib', plugins_url( 'dist/video-js.hls.js', dirname( __FILE__ ) ), array( 'video_js' ) );
		}

		// Ads Contrib
		wp_enqueue_style( 'video_js_ads_contrib', plugins_url( 'dist/video-js.ads.min.css', dirname( __FILE__ ) ), array( 'video_js_css' ) );
		wp_enqueue_script( 'video_js_ads_contrib', plugins_url( 'dist/video-js.ads.js', dirname( __FILE__ ) ), array( 'video_js' ) );

		// IMA contrib and IMA SDK
		if ( apply_filters( 'vbwa_load_ima', true ) ) {
			wp_enqueue_script( 'google_ima_sdk', '//imasdk.googleapis.com/js/sdkloader/ima3.js' );
			wp_enqueue_style( 'video_js_ima_contrib', plugins_url( 'dist/video-js.ima.min.css', dirname( __FILE__ ) ), array( 'video_js_ads_contrib' ) );
			wp_enqueue_script( 'video_js_ima_contrib', plugins_url( 'dist/video-js.ima.js', dirname( __FILE__ ) ), array( 'video_js_ads_contrib' ) );
		}

		wp_enqueue_style( 'vbwa-skin', vbwa_get_active_skin_url(), array( 'video_js_css' ) );

		// Plugin bootstrap
		wp_enqueue_script( 'video-plus-bootstrap', plugins_url( 'dist/video-block-with-ads.js', dirname( __FILE__ ) ), array( 'jquery', 'video_js' ), null, true );

		do_action( 'vbwa_enqueue_scripts' );
	}

	public function init() {
		// Frontend style
		wp_register_style(
			'vbwa-cgb-style-css',
			plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
			array( 'video_js_css', 'wp-editor' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' )
		);

		// Editor script
		wp_register_script(
			'vbwa-cgb-block-js',
			plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
			array( 'wp-blocks', 'wp-element', 'wp-editor' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ),
			true
		);

		// Editor style
		wp_register_style(
			'vbwa-cgb-block-editor-css',
			plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' )
		);

		register_block_type( 'video-plus/video-with-ads', array(
			'style'           => 'vbwa-cgb-style-css',
			'editor_script'   => 'vbwa-cgb-block-js',
			'editor_style'    => 'vbwa-cgb-block-editor-css',
			'render_callback' => array( $this, 'render' ),
		) );
	}

	public function render( $attributes, $content ) {
		return $this->render_html( $attributes );
	}

	public function do_shortcode( $atts ) {
		$atts = shortcode_atts( array(
			'id'       => '',
			'autoplay' => '',
			'loop'     => '',
			'muted'    => '',
			'controls' => 'true',
			'preload'  => '',
			'adtag'    => '',
			'poster'   => '',
			'src'      => '',
		), $atts, $this->shortcode );

		$atts = apply_filters( 'vbwa_shortcode_atts', $atts );

		return $this->render_html( $atts );
	}

	private function render_html( $atts ) {
		$settings = vbwa_get_settings();

		$atts = wp_parse_args( $atts, array(
			'id'       => '',
			'autoplay' => false,
			'loop'     => false,
			'muted'    => false,
			'controls' => true,
			'preload'  => 'metadata',
			'adtag'    => '',
			'poster'   => '',
			'src'      => '',
		) );

		if ( empty( $atts['src'] ) ) {
			return '<span class="warning">Please add source for video.</span>';
		}

		$data_setup = array(
			'autoplay' => $atts['autoplay'],
			'loop'     => $atts['loop'],
			'controls' => $atts['controls'],
			'muted'    => $atts['muted'],
			'poster'   => esc_url( $atts['poster'] ),
			'preload'  => $atts['preload'],
			'plugins'  => array(),
			'sources'  => array(),
		);

		$data_setup['sources'][] = esc_url( $atts['src'] );

		$adoptions = array();
		if ( $atts['adtag'] ) {
			$adoptions['ima'] = array(
				'adTagUrl' => $atts['adtag'],
			);
		} elseif ( $settings['default_adtag'] ) {
			$adoptions['ima'] = array(
				'adTagUrl' => $settings['default_adtag'],
			);
		}

		if ( ! empty( $adoptions ) ) {
			$adoptions['ima']['vastLoadTimeout']      = $settings['vastloadtimeout'];
			$adoptions['ima']['adsRenderingSettings'] = array(
				'loadVideoTimeout' => $settings['loadvideotimeout'],
			);
			$adoptions['ima']['contribAdsSettings']   = array(
				'timeout' => $settings['timeout'],
			);
		}

		$video_html = '<video ';

		if ( ! empty( $atts['id'] ) ) {
			$video_html .= 'id="' . esc_attr( $atts['id'] ) . '" ';
		}

		$video_html .= 'class="video-js vjs-fluid" playsinline ';
		$video_html .= "data-ad_options='" . wp_json_encode( apply_filters( 'vbwa_ima_options', $adoptions ) ) . "' ";
		$video_html .= "data-vbwa='" . wp_json_encode( apply_filters( 'vbwa_video_datasetup', $data_setup ) ) . "' >";
		$video_html .= '</video>';

		$html = '<div>' . $video_html . '</div>';
		return apply_filters( 'vbwa_html', $html );
	}
}
