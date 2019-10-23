import C from '../constants'
import cell from './cell'

const cells = (state=[], action) => {

	switch (action.type) {
		case C.RESET_GAME:
			return action.cells
		case C.REVEAL_CELL:
			return state.map((c) => {
				return cell(c, action)
			})
		case C.HINT:
			return state.map((c) => {
				return cell(c, action)
			})
		default:
			return state
	}
}

export default cells