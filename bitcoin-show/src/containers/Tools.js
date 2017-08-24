import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tools from '../components/Tools';
import { stopProgress } from '../actions/toolsActions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    stopProgress,
  }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Tools);
