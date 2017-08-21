import { connect } from 'react-redux'
import Question from '../components/Question.jsx'

const mapStateToProps = state => ({
  text: state.questionReducer.question ?
    state.questionReducer.question.text : "",
  }
)

export default connect(
  mapStateToProps,
)(Question)
