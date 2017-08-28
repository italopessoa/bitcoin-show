import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tools from '../components/Tools';
import { skipQuestion } from '../actions/questionActions';

const mapStateToProps = state => ({
  mustDisplayCards: state.displayCards,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    skipQuestion,
    // skipQuestion,
    // displayCards,
    // hideCards,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tools);
