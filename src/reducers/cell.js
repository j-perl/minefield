import C from '../constants'

const cell = (state={}, action) => {
	switch (action.type) {
		case C.REVEAL_CELL:
			return (state.type === C.CELL) && (state.index === action.index) ? {
				...state,
				revealed: true
			} :
			state
		case C.HINT:
			return (state.type === C.CELL) && action.indexes.includes(state.index) ? {
				...state,
				suggested: true
			} :
			state
		default:
			return state
	}
}

export default cell