import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from '../components/Question';
import checkAnswer from '../actions/questionActions';

const mapStateToProps = state => ({
  question: state.questionData.question,
  selectedOptionNumber: state.optionData.selectedOptionNumber,
  hasASelectedOption: state.optionData.hasASelectedOption,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    checkAnswer,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question);
