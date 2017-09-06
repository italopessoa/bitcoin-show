import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cards from '../components/Cards'
import { cardSelected } from '../actions/questionActions'

const mapStateToProps = state => ({
  currentQuestion: state.questionData.question,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    cardSelected,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)
