import './style.scss';
import './editor.scss';

import { Fragment, createRef } from '@wordpress/element';
import {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/editor';

import {
	BaseControl,
	Button,
	Disabled,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
	SVG,
	Path
} from '@wordpress/components';

const { registerBlockType } = wp.blocks;

registerBlockType( 'video-plus/video-with-ads', {
	
	title: 'Video with Ads',
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M4 6l2 4h14v8H4V6m18-2h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4L2 6v12l2 2h16l2-2V4z" /></SVG>,
	category: 'common',
	keywords: [
		'IMA',
		'Video Ads',
		'Vast Vpaid'
	],
	attributes: {
		adtag: {
			type: 'string'
		},
		autoplay: {
			type: 'boolean'
		},
		controls: {
			type: 'boolean',
			default: true
		},
		loop: {
			type: 'boolean'
		},
		muted: {
			type: 'boolean'
		},
		poster: {
			type: 'string'
		},
		preload: {
			type: 'string',
			default: 'metadata'
		},
		src: {
			type: 'string'
		},
	},

	edit: function( props ) {
		const {
			adtag,
			autoplay,
			caption,
			controls,
			loop,
			muted,
			poster,
			preload,
			src,
		} = props.attributes;

		var posterImageButton = createRef();

		const onSelectVideo = function( media ) {
			if ( ! media || ! media.url ) {
				return;
			}
			
			props.setAttributes( {
				src: media.url
			} );
		};

		const onSelectURL = function( url ) {
			props.setAttributes( {
				src: url
			} )
		};

		const onSelectPoster = function( media ) {
			props.setAttributes( {
				poster: media.url
			} )
		}

		const onRemovePoster = function() {
			posterImageButton.current.focus();
			props.setAttributes( {
				poster: undefined
			} )
		}

		if ( ! src ) {
			return (
				<MediaPlaceholder
					icon="media-video"
					className={ props.className }
					onSelect={ onSelectVideo }
					onSelectURL={ onSelectURL }
					accept="video/*"
					allowedTypes={ [ 'video' ] }
					value={ props.attributes }
				/>
			);
		}

		return (
			<Fragment>
				<InspectorControls>
					<ToggleControl
						label={ 'Autoplay' }
						onChange={ ( value ) => props.setAttributes( { autoplay: !! value } ) }
						checked={ autoplay }
					/>
					<ToggleControl
						label={ 'Loop' }
						onChange={ ( value ) => props.setAttributes( { loop: !! value } ) }
						checked={ loop }
					/>
					<ToggleControl
						label={ 'Muted' }
						onChange={ ( value ) => props.setAttributes( { muted: !! value } ) }
						checked={ muted }
					/>
					<ToggleControl
						label={ 'Playback Controls' }
						onChange={ ( value ) => props.setAttributes( { controls: !! value } ) }
						checked={ controls }
					/>
					<SelectControl
						label={ 'Preload' }
						value={ preload }
						onChange={ ( value ) => props.setAttributes( { preload: value } ) }
						options={ [
							{ value: 'auto', label: 'Auto' },
							{ value: 'metadata', label: 'Metadata' },
							{ value: 'none', label: 'None' },
						] }
					/>
					<MediaUploadCheck>
						<BaseControl
							className="editor-video-poster-control"
							label={ 'Poster Image' }
						>
							<MediaUpload
								title={ 'Select Poster Image' }
								onSelect={ onSelectPoster }
								allowedTypes={ ['image'] }
								render={ ( { open } ) => (
									<Button
										isDefault
										onClick={ open }
										ref={ posterImageButton }
									>
										{ ! props.attributes.poster ? 'Select Poster Image' : 'Replace image' }
									</Button>
								) }
							/>
							{ !! props.attributes.poster &&
								<Button onClick={ onRemovePoster } isLink isDestructive>
									{ 'Remove Poster Image' }
								</Button>
							}
						</BaseControl>
					</MediaUploadCheck>
					<PanelBody title="Ad Settings" initialOpen={ false } >
						<TextControl
							label="Ad Tag"
							value={ props.attributes.adtag }
							onChange={ ( value ) => props.setAttributes( { adtag: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<figure className={ props.className }>
					<Disabled>
						<video
							controls={ controls }
							poster={ poster }
							src={ src }
						/>
					</Disabled>
				</figure>
			</Fragment>
		);
	},

	save: function( props ) {
		const { id, autoplay, caption, controls, loop, muted, poster, preload, src, adtag } = props.attributes;
		return null;
		return (
			<div>
				<video
					id={ false }
					class={ 'video-js vjs-fluid' }
					autoPlay={ autoplay }
					controls={ controls }
					loop={ loop }
					muted={ muted }
					poster={ poster }
					preload={ preload !== 'metadata' ? preload : undefined }
					data-adtag={ adtag }
				>
					<source src={ src } />
				</video>
			</div>
		);
	},
} );
