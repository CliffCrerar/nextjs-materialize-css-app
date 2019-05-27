const webmanifest = {
	name: "Next.js",
	short_name: "Next.js",
	icons: [
		{
			src: "/static/favicons/android-chrome-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/static/favicons/android-chrome-512x512.png",
			sizes: "512x512",
			type: "image/png"
		}
	],
	theme_color: "#000000",
	background_color: "#000000",
	display: "standalone"
}

console.log( JSON.stringify( webmanifest ) );