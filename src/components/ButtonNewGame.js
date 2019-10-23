import React from 'react'
import { reset } from '../actions'
import { connect } from 'react-redux'

function ButtonNewGame({onClick}) {
	return (
      <button
        className="new-game"
        onClick={() => onClick() }
      >
        New Game
      </button>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(reset())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ButtonNewGame)