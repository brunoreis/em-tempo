import 'isomorphic-fetch'
import React from 'react'
import { Timeline } from '../components/Timeline'

const Index = ({ stars }) => (
	<>

	<Timeline />
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

export default Index
