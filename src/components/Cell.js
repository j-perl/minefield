import React from 'react';
import './Cell.css';
import bomb from '../assets/bomb24.png'
import { connect } from 'react-redux'
import { revealCell } from '../actions'
import C from '../constants'
import classNames from 'classnames'

class Cell extends React.Component {

  render() {

    const { value, revealed, onClick, index, suggested } = this.props

    var btnClass = classNames({
      Cell: true,
      revealed: revealed,
      suggested: !revealed && suggested
    });

    return (
      <button
        className={btnClass}
        onClick={() => onClick(index, value) }
      >
        { revealed ? (value === 0 ? <img src={bomb} alt="bomb" /> : value) : null }
      </button>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { index } = ownProps
  const cells = state.cells.filter((c) => { return c.type ===  C.CELL })
  const { value, revealed, suggested } = cells[index]

  return { value, revealed, suggested }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (i, val) => { dispatch(revealCell(i, val)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)