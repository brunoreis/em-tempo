const withOffline = require('next-offline')

module.exports = withOffline({
	target: process.env.NEXT_TARGET || 'serverless',
	workboxOpts: {
		swDest: 'static/service-worker.js',
		skipWaiting: true,
		runtimeCaching: [
			{
				urlPattern: /[.](png|jpg|ico|css)/,
				handler: 'StaleWhileRevalidate',
				options: {
					cacheName: 'assets-cache',
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/code\.getmdl\.io.*/,
				handler: 'StaleWhileRevalidate',
				options: {
					cacheName: 'lib-cache'
				}
			},
			{
				urlPattern: /^http.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'http-cache'
				}
			}
		]
	}
})
