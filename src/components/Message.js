import React from 'react'
import { connect } from 'react-redux'
import C from '../constants'
import classNames from 'classnames'
import './Message.css'

function Message({message, gameState}) {

	var divClass = classNames({
      Message: true,
      won: gameState === C.STATE_WON,
      lost: gameState === C.STATE_LOST
    });

	return (
      <div
        className={divClass}
      >
        {message}
      </div>
    );
}

function mapStateToProps(state) {
  const { message, gameState } = state
  return { message, gameState }
}

export default connect(
  mapStateToProps,
  null
)(Message)