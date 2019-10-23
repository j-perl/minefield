import C from '../constants'

const message = (state="You need 45 points", action) => {
	switch (action.type) {
		case C.WIN_GAME:
			return "You win"
		case C.LOSE_GAME:
			return "You lose"
		default:
			return state
	}
}

export default message