import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from './actions/questionActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';

const App = (props) => {
  return (
    <div>
      <button onClick={() => props.teste()}>Carregar</button>
      { props.questionReducer.question && <Question /> }
      <Options />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    questionReducer: state.questionReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teste: () => dispatch(fetchQuestion()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
