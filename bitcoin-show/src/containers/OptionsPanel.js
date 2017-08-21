import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OptionsList from '../components/OptionsList';
import { selectOption } from '../actions/optionActions';

const mapStateToProps = state => ({
  options: state.questionReducer.question ?
    state.questionReducer.question.options : [],
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    selectOption,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsList);
