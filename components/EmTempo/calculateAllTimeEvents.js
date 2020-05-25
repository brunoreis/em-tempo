import { timelineFamilia } from './timelineFamilia'

export const calculateAllTimeEvents = () => {
	const timeEvents = timelineFamilia.events
	const initialDate = timeEvents[0].date
	const finalDate = timeEvents[timeEvents.length - 1].date
	let actualDate = initialDate
	const allTimeEvents = []
	//while (actualDate <= finalDate) {
	while (actualDate <= finalDate) {
		const filteredTimeEvents = timeEvents.filter(
			(timeEvent) => timeEvent.date == actualDate
		)

		let description = ''
		if (filteredTimeEvents.length > 0) {
			const descriptions = filteredTimeEvents.map((te) => te.description)
			description = descriptions.join('. ')
		}

		allTimeEvents.push({
			date: actualDate,
			description,
		})
		actualDate++
	}
	return allTimeEvents
}
