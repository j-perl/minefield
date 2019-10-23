import React from 'react'
import Cell from './Cell'
import SolverCell from './SolverCell'
import ButtonNewGame from './ButtonNewGame'
import Score from './Score'
import Message from './Message'
import Hint from './Hint'
import { connect } from 'react-redux'


class Grid extends React.Component {

  renderCell(i) {
    return (
      <Cell index={i} />
    );
  }

  renderSolverCell(i) {
    return (
      <SolverCell index={i} />
    );
  }

  render() {

    return (
      <div>
        <ButtonNewGame />
        <Hint />
        <div className="grid-row">
          {this.renderCell(0)}{this.renderCell(1)}{this.renderCell(2)}{this.renderCell(3)}{this.renderCell(4)}{this.renderCell(5)}{this.renderSolverCell(0)}
        </div>
        <div className="grid-row">
          {this.renderCell(6)}{this.renderCell(7)}{this.renderCell(8)}{this.renderCell(9)}{this.renderCell(10)}{this.renderCell(11)}{this.renderSolverCell(1)}
        </div>
        <div className="grid-row">
          {this.renderCell(12)}{this.renderCell(13)}{this.renderCell(14)}{this.renderCell(15)}{this.renderCell(16)}{this.renderCell(17)}{this.renderSolverCell(2)}
        </div>
        <div className="grid-row">
          {this.renderCell(18)}{this.renderCell(19)}{this.renderCell(20)}{this.renderCell(21)}{this.renderCell(22)}{this.renderCell(23)}{this.renderSolverCell(3)}
        </div>
        <div className="grid-row">
          {this.renderCell(24)}{this.renderCell(25)}{this.renderCell(26)}{this.renderCell(27)}{this.renderCell(28)}{this.renderCell(29)}{this.renderSolverCell(4)}
        </div>
        <div className="grid-row">
          {this.renderCell(30)}{this.renderCell(31)}{this.renderCell(32)}{this.renderCell(33)}{this.renderCell(34)}{this.renderCell(35)}{this.renderSolverCell(5)}
        </div>
        <div className="grid-row">
          {this.renderSolverCell(6)}{this.renderSolverCell(7)}{this.renderSolverCell(8)}{this.renderSolverCell(9)}{this.renderSolverCell(10)}{this.renderSolverCell(11)}
        </div>
        <Message />
        <Score />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cells } = state
  return { cells }
}

export default connect(
  mapStateToProps,
  null
)(Grid)