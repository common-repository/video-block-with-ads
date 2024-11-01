=== Video Block with Ads ===
Tags: video, advertising, ads, IMA, VAST, Vpaid, block
License: GPLv2 or later
Author: federico_jacobi
Stable tag: trunk
Requires PHP: 7.0
Requires at least: 2.5
Tested up to: 5.1
Contributors: federico_jacobi

Video Gutenberg Block and video player on steroids and low fat.

== Description ==
Put your video blocks on steroids! The regular WordPress video block is great, but very simple. This plugin allows you to add advertising, skins and additional video formats. You don't need an extra platform, complicated setups or API keys. It just works. Simply upload videos to your media gallery as you usually would and the HTML player will be put on a strict protein shake regime!

Video API powered by VideoJS so you can add custom functionality if desired. Advertising layer uses the Google IMA SDK which is compatible with VAST and Vpaid tags.

**For now it will only work on the single post template.**


== Installation ==
Once you install the plugin you are ready for action.

Now you have the *Video with Ads* gutenberg block and the [video-plus] shortcode available.

== Frequently Asked Questions ==
* Where do I add the ad tag? Once you add the block and use a source for the video. Click on the block, and its options will be on the right on the editor. One of them will be Ad Settings. That's where you do it. Also, you can set a global ad tag on the Settings menu under Video Player.
* Can it do autoplay? Yes. However, browsers have their own policies regarding autoplay. You will have better chances of autoplaying if you set the video to mute.
* Can it autoplay on mobile? Yes, but see above. Same rules apply.
* Are videos responsive? Yes.
* Can I pass page level targeting parameters? Not yet. But it is in the roadmap. This is key.
* What's up with the skins? This changes the way the player looks. There is a couple of included skins that look good. You can implement your own with CSS and the vbwa_skins filter.

== Changelog ==
= 0.71 =
Make iOS happy by playing inline.

= 0.7 =
Add timeout settings.

= 0.6 =
Convert video to dynamic block. Not compatible with the 0.6 version. Sorry! This setup is just better.
Add skins, default ad tag, HLS.

= 0.5 =
First version published.