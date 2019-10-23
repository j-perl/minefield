import C from '../constants'

const score = (state=0, action) => {
	switch (action.type) {
		case C.REVEAL_CELL:
			return state + action.value
		default:
			return state
	}
}

export default score