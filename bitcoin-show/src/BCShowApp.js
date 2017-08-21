import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestion } from './actions/questionActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';

const App = (props) => {
  return (
    <div>
      <button onClick={() => props.fetchQuestion()}>Carregar</button>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     teste: () => dispatch(fetchQuestion()),
//   };
// }
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
