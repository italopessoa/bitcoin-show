import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from './actions/questionActions';
import fetchAwards from './actions/awardActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';

const App = props => (
  <div>
    <button onClick={() => {
      props.fetchQuestion();
      props.fetchAwards();
    }
    }
    >Carregar</button>
    {props.questionData.questionLoadCompleted && <Question />}
    {props.questionData.questionLoadCompleted && <Options />}
  </div>
);

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
    fetchAwards,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchAwards: PropTypes.func.isRequired,
};
