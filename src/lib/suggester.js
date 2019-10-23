import C from '../constants'

const suggester = (allCells) => {
	
	const cells = allCells.filter((c) => { return c.type === C.CELL })
	const solverCells = allCells.filter((c) => { return c.type ===  C.SOLVER_CELL })

	const suggestions = cells.reduce((accumulator, currentValue, index, arr) => {

		if (currentValue.revealed === true || accumulator.bombRisk === 0) return accumulator

		const rowSolverCell = solverCells[Math.floor(index/6)];
		const colSolverCell = solverCells[index%6+6];

		let gain = (rowSolverCell.sum + colSolverCell.sum) / 2 / 6
		let bombRisk = (rowSolverCell.bombs === 0 || colSolverCell === 0) ?
			0 : (rowSolverCell.bombs + colSolverCell.bombs) / 2 / 6

		if (accumulator.bombRisk > bombRisk) {
			return {bombRisk: bombRisk, gain: gain, cells: [index]}
		} else if (accumulator.bombRisk === bombRisk && accumulator.gain < gain){
			return { ...accumulator, gain, cells: [index] }
		} else if (accumulator.bombRisk === bombRisk && accumulator.gain === gain) {
			accumulator.cells.push(index)
			return accumulator
		} else {
			return accumulator
		}

	}, {bombRisk: 1, gain: 0, cells: []}).cells

	return suggestions
}

export default suggester