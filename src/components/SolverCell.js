import React from 'react'
import { connect } from 'react-redux'
import C from '../constants'
import bomb from '../assets/bomb12.png'
import './SolverCell.css'

class SolverCell extends React.Component {

  render() {

    const { sum, bombs } = this.props

    return (
      <button
        className="SolverCell"
      >
        {sum}/{bombs} <img src={bomb} alt="bomb "/>
      </button>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { index } = ownProps
  const solverCells = state.cells.filter((c) => { return c.type ===  C.SOLVER_CELL })
  const { sum, bombs } = solverCells[index]

  return { sum, bombs }
}

export default connect(
  mapStateToProps,
  null
)(SolverCell)