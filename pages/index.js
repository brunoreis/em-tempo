import React, { useEffect } from 'react'
import { EmTempo } from '../components/EmTempo'

// process.browser

// if (process.browser && navigator && 'serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('/service-worker.js').then((reg) => {
// 		// alert('registered...')
// 		console.log('registered', reg)
// 		console.log('...')
// 		if (reg.waiting) {
// 			alert('waiting....')
// 		}

// 		reg.onupdatefound = () => {
// 			const newWorker = reg.installing
// 			// alert('update found')
// 			newWorker.onstatechange = () => {
// 				alert('state change....')
// 				if (newWorker.state === 'installed') {
// 					alert('installed....')
// 				}
// 			}
// 		}
// 	})
// }

const Index = ({ stars }) => {
	return (
		<>
			<EmTempo />
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</>
	)
}

export default Index
