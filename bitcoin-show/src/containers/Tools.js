import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tools from '../components/Tools';
import { skipQuestion, displayCards, stopPlaying } from '../actions/questionActions';

const mapStateToProps = state => ({
  // mustDisplayCards: state.displayCards,
  skipAttemptsLeft: state.questionData.skipAttemptsLeft,
  cardsWereUsed: state.questionData.cardsWereUsed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    skipQuestion,
    displayCards,
    stopPlaying,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tools);
