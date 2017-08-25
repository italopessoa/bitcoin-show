import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tools from '../components/Tools';
import { stopProgress, skipQuestion, displayCards, hideCards } from '../actions/toolsActions';

const mapStateToProps = state => ({
  mustDisplayCards: state.displayCards,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    stopProgress,
    skipQuestion,
    displayCards,
    hideCards,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tools);
