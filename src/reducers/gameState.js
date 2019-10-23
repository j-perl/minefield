import C from '../constants'

const gameState = (state=C.STATE_RUNNING, action) => {
	switch (action.type) {
		case C.WIN_GAME:
			return C.STATE_WON
		case C.LOSE_GAME:
			return C.STATE_LOST
		default:
			return state
	}
}

export default gameState