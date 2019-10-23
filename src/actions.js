import C from './constants'
import populateGrid from './lib/populateGrid'

export const revealCell = (index, value) =>
	({
		type: C.REVEAL_CELL,
		index,
		value
	})

export const hint = () =>  {

	return {
		type: C.HINT
	}
}	

export const reset = () => {
	const cells = populateGrid()

	return {
		type: C.RESET_GAME,
		cells: cells
	}
}

export const win = () => 
	({
		type: C.WIN_GAME
	})

export const lose = () => 
	({
		type: C.LOSE_GAME
	})