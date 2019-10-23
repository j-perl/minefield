import React from 'react'
import { connect } from 'react-redux'
import './Score.css'

function Score({ score }) {
	return (
      <div
        className="Score"
      >
        Score: {score}
      </div>
    );
}

function mapStateToProps(state) {
  const { score } = state
  return { score }
}

export default connect(
  mapStateToProps,
  null
)(Score)