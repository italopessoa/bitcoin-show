import { connect } from 'react-redux';
import OptionsList from '../components/OptionsList';

const mapStateToProps = state => ({
  options: state.questionReducer.question ?
    state.questionReducer.question.options : [],
});

export default connect(
  mapStateToProps,
)(OptionsList);
