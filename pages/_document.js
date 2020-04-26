import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<html lang="en-GB">
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta name="theme-color" content="#673ab7" />
					<meta
						name="Description"
						content="Em Tempo - telling stories"
					/>
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/favicon.ico" />
					<link
						rel="apple-touch-icon"
						href="static/apple-180x180.png"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument
