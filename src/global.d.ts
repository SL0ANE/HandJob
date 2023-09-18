import * as events from './util/events'

declare global {
	const HandJob: {
		events: typeof events
	}
}
