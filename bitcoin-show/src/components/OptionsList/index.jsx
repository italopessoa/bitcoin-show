import React from 'react'
import PropTypes from 'prop-types'
import Option from '../../components/Option'
import CardPanel from '../../components/CardPanel'

const styles = {
  selected: {
    background: '#8c1010',
    color: 'white',
    boxShadow: '0 2px 2px 0 rgb(0, 0, 0), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
  },
  unselected: {
    backgroundColor: '#F44336',
    color: 'white',
  },
  default: {
    paddingTop: '10px',
    paddingBottom: '10px',
    marginBottom: '0',
    display: 'block',
  },
}

const getStyle = (selectedOptionNumber, actualOptionNumber) => (
  (selectedOptionNumber === actualOptionNumber) ? styles.selected : styles.unselected)

const OptionsList = props => (
  <ul>
    {
      props.options.map(option => (
        <li key={option.number} >
          <CardPanel
            className="waves-effect waves-light"
            onClick={props.selectOption}
            onClickArgs={option.number}
            style={{ ...styles.default, ...getStyle(props.selectedOptionNumber, option.number) }}
            content={
              <Option number={option.number} text={option.text} />
            }
          />
        </li>
      ))
    }
  </ul>
)

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  selectedOptionNumber: PropTypes.number.isRequired,
}

export default OptionsList
