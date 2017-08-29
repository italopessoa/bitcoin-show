import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tools from '../components/Tools';
import { skipQuestion, displayCards } from '../actions/questionActions';

const mapStateToProps = state => ({
  // mustDisplayCards: state.displayCards,
  skipAttemptsLeft: state.questionData.skipAttemptsLeft,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    skipQuestion,
    displayCards,
    // hideCards,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tools);
