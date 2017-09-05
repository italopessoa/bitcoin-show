import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OptionsList from '../components/OptionsList'
import selectOption from '../actions/optionActions'

const questionOptionsFilter = question => (
  question ? question.options : []
)

const mapStateToProps = state => ({
  options: questionOptionsFilter(state.questionData.question),
  selectedOptionNumber: state.optionData.selectedOptionNumber,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    selectOption,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsList)
