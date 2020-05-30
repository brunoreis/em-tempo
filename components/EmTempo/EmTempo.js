// go
import React from 'react'
import styled from 'styled-components'
import { Timeline } from './Timeline'
import { ToolBar } from './ToolBar'
import { calculateAllTimeEvents } from './calculateAllTimeEvents'

export const EmTempo = () => {
	const allTimeEvents = calculateAllTimeEvents()

	return (
		<Wrapper>
			<Timeline allTimeEvents={allTimeEvents} />
			<ToolBar />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 0px;
	flex: 1;
	margin-top: 20px;
`
