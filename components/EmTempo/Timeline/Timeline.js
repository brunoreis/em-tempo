import React from 'react'
import { Event } from './Event'

export const Timeline = ({ allTimeEvents }) => {
	return (
		<>
			{allTimeEvents.map((timeEvent) => (
				<span key={timeEvent.date}>
					<Event timeEvent={timeEvent} />
				</span>
			))}
		</>
	)
}
