import { createStore, combineReducers, applyMiddleware } from 'redux'
import cells from './reducers/cells'
import score from './reducers/score'
import message from './reducers/message'
import gameState from './reducers/gameState'
import C from './constants'
import { win, lose } from './actions'
import populateGrid from './lib/populateGrid'
import suggester from './lib/suggester'

const combinedReducers = combineReducers({ cells, score, message, gameState })
const initialState = {
	cells: populateGrid()
}

const rootReducer = (state, action) => {

	if (action.type === C.RESET_GAME) {
		console.log("reset : action", action);
		state = undefined
	}

	return combinedReducers(state, action);
}

const onRevealCell = ({ getState, dispatch }) => next => action => {

	if (action.type === C.REVEAL_CELL) {

		const { cells } = getState()

		const cell = cells.filter((c) => { return c.type ===  C.CELL })[action.index]
		if (cell.revealed) return // do nothing
			
		let result = next(action)

		const { score } = getState()

		if (score >= 45) {
			dispatch(win())
		} else if (action.value === 0) {
			dispatch(lose())
		}

		return result
	}
	
	let result = next(action)
	return result
}

const isGameOver = ({ getState }) => next => action => {

	const { gameState } = getState()
	if (gameState !== C.STATE_RUNNING) {
		if (action.type === C.REVEAL_CELL || action.type === C.HINT) return
	}

	let result = next(action)
	return result
}

const hint = ({ getState }) => next => action => {

	if (action.type === C.HINT) {
		const { cells } = getState()
		const indexes = suggester(cells)
		action.indexes = indexes
	}

	let result = next(action)
	return result
}

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(onRevealCell, isGameOver, hint)
)

export default store