import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CardPanel extends Component {
  constructor(props) {
    super(props)
    this.onClickEvent = this.onClickEvent.bind(this)
  }
  onClickEvent() {
    return this.props.onClick ? this.props.onClick(this.props.onClickArgs) : {}
  }
  render() {
    return (
      <div
        onClick={() => this.onClickEvent()}
        style={{
          cursor: (this.props.touch && 'pointer'),
          ...this.props.style,
        }}
        className={`card-panel ${this.props.className}`
        }>
        {this.props.children}
      </div >
    )
  }
}

export default CardPanel

CardPanel.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

CardPanel.defaultProps = {
  id: '',
  className: '',
  onClick: () => { },
}
