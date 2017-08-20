import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from './actions/questionActions';

const App = (props) => {
  return (
    <button onClick={() => props.teste()}>botao</button>
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
