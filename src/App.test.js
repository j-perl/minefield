import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import C from './constants'
import message from './reducers/message'
import * as cell from './reducers/cell'
import cells from './reducers/cells'
import gameState from './reducers/gameState'
import score from './reducers/score'
import deepFreeze from 'deep-freeze'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("cell Reducer", () => {

	it("REVEAL_CELL success", () => {
		const state = {
				index: 23,
				revealed: false,
				type: C.CELL,
				value: 1
			}
		
		const action = {
			type: C.REVEAL_CELL,
			index: 23,
			value: 1
		}
		deepFreeze(state)
		deepFreeze(action)
		const result = cell.default(state, action)
		expect(result)
			.toEqual({
				index: 23,
				revealed: true,
				type: C.CELL,
				value: 1
			})
	})

	it("HINT success", () => {
		const state = {
				index: 23,
				revealed: false,
				type: C.CELL,
				value: 1,
				suggested: false
			}
		
		const action = {
			type: C.HINT,
			indexes: [23]
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = cell.default(state, action)
		expect(result)
			.toEqual({
				index: 23,
				revealed: false,
				type: C.CELL,
				value: 1,
				suggested: true
			})
	})
})

describe("cells Reducer", () => {

	it("RESET_GAME success", () => {
		const state = []
		/* we're not testing populateGrid, merely make sure 
		that it replaces the cells with what's in action,
		we could have mocked populateGrid() */
		const newCells = ["cells"]
		const action = {
			type: C.RESET_GAME,
			cells: newCells
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = cells(state, action)
		expect(result)
			.toEqual(newCells)
	})

	it("REVEAL_CELL success", () => {

		// mock cell
		const spy = jest.spyOn(cell, 'default');
    	spy.mockReturnValue({
				index: 24,
				revealed: true,
				type: C.CELL,
				value: 3
			});

		const state = [
			{
				index: 23,
				revealed: true,
				type: C.CELL,
				value: 1
			},
			{
				index: 24,
				revealed: false,
				type: C.CELL,
				value: 3
			}
		]

		const action = {
			type: C.REVEAL_CELL,
			index: 24,
			value: 3
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = cells(state, action)
		expect(result[1])
			.toEqual({
				index: 24,
				revealed: true,
				type: C.CELL,
				value: 3
			})
	})

	it("HINT success", () => {

		// mock cell
		const spy = jest.spyOn(cell, 'default');
    	spy.mockReturnValue({
				index: 24,
				revealed: true,
				type: C.CELL,
				value: 3,
				suggested: true
			});

		const state = [
			{
				index: 23,
				revealed: true,
				type: C.CELL,
				value: 1
			},
			{
				index: 24,
				revealed: false,
				type: C.CELL,
				value: 3,
				suggested: false
			}
		]

		const action = {
			type: C.HINT,
			indexes: [24]
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = cells(state, action)
		expect(result[1])
			.toEqual({
				index: 24,
				revealed: true,
				type: C.CELL,
				value: 3,
				suggested: true
			})
	})
})

describe("score Reducer", () => {
	it("score adds up correctly upon revealing a cell", () => {
		const state = 24
		const action = {
			type: C.REVEAL_CELL,
			index: 15,
			value: 2
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = score(state, action)
		expect(result)
			.toEqual(26)
	})
})

describe("gameState Reducer", () => {
	it("should have correct state upon winning", () => {
		const state = C.STATE_RUNNING
		const action = {
			type: C.WIN_GAME
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = gameState(state, action)
		expect(result)
			.toEqual(C.STATE_WON)
	})

	it("should have correct state upon losing", () => {
		const state = C.STATE_RUNNING
		const action = {
			type: C.LOSE_GAME
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = gameState(state, action)
		expect(result)
			.toEqual(C.STATE_LOST)
	})
})

describe("message Reducer", () => {
	it("should have You win as text upon winning", () => {
		const state = "You need 45 points"
		const action = {
			type: C.WIN_GAME
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = message(state, action)
		expect(result)
			.toEqual("You win")
	})

	it("should have You win as text upon losing", () => {
		const state = "You need 45 points"
		const action = {
			type: C.LOSE_GAME
		}
		deepFreeze(state)
		deepFreeze(action)

		const result = message(state, action)
		expect(result)
			.toEqual("You lose")
	})

	it("should have You need 45 points as text by default", () => {
		const action = {
			type: "WHATEVER"
		}

		const result = message(undefined, action)
		expect(result)
			.toEqual("You need 45 points")
	})
})
