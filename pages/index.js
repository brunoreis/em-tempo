import 'isomorphic-fetch'
import React from 'react'
import Fork from '../components/Fork'
import Todo from '../components/Todo'

const Index = ({ stars }) => (
	<div>
		Em tempo
	</div>

)

Index.getInitialProps = async () => {
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default Index
