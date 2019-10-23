import React from 'react'
import { hint } from '../actions'
import { connect } from 'react-redux'
import bulb from '../assets/bulb48.png'
import './Hint.css'

function Hint({onClick}) {
	return (
      <button
        className="Hint"
        onClick={() => onClick() }
      >
        <img src={bulb} alt="hint"/> 
      </button>
    );
}

const mapDispatchToProps = dispatch => {

  return {
    onClick: () => dispatch(hint())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Hint)