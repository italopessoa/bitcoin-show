import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from './actions/questionActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';

const App = props => (
  <div>
    <button onClick={() => props.fetchQuestion()}>Carregar</button>
    { props.appData.question && <Question /> }
    { props.appData.question && <Options /> }
  </div>
);

function mapStateToProps(state) {
  return {
    appData: state.questionReducer,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
};
