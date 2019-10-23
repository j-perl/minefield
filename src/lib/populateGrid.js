import { generateRandomValues } from './generateRandomValues'
import C from '../constants'

const isABomb = (cell) => {
	return cell.value === 0
}

const populateCells = (random) => {
	return random.map((val, i) => ({ index: i, type:C.CELL, revealed: false, value: val }))
}

const populateSolverCells = (cells) => {
	return cells.reduce((arr, cell, currentIndex) => {
		const currentRowSolverIndex = Math.floor(currentIndex/6);
		const currentColSolverIndex = currentIndex%6+6;
	    const currentRowSolver = arr[currentRowSolverIndex] ? arr[currentRowSolverIndex] : { index: currentRowSolverIndex, type: C.SOLVER_CELL, sum: 0, bombs: 0 }
	    const currentColSolver = arr[currentColSolverIndex] ? arr[currentColSolverIndex] : { index: currentColSolverIndex, type: C.SOLVER_CELL, sum: 0, bombs: 0 }
	    if (isABomb(cell)) {
	      arr[currentRowSolverIndex] = { ...currentRowSolver, bombs: currentRowSolver.bombs + 1 }
	      arr[currentColSolverIndex] = { ...currentColSolver, bombs: currentColSolver.bombs + 1 }
	      return arr
	    } else {
	      arr[currentRowSolverIndex] = { ...currentRowSolver, sum: currentRowSolver.sum + cell.value }
	      arr[currentColSolverIndex] = { ...currentColSolver, sum: currentColSolver.sum + cell.value }
	      return arr
	    }
	  }, [])
}

const populateGrid =  () => {
	var randomValues = generateRandomValues()
	const cells = populateCells(randomValues)
	const solverCells = populateSolverCells(cells)

	return [ ...cells, ...solverCells ]
}

 export default populateGrid