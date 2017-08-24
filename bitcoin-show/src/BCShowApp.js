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
    }}>Carregar</button>
    <div>
      {props.questionData.questionLoadCompleted && <Question />}
      {props.questionData.questionLoadCompleted && <Options />}
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Right</th>
            <th>Stop</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.award.right}</td>
            <td>{props.award.stop}</td>
            <td>{props.award.wrong}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
    award: state.awardData.value,
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
  award: PropTypes.shape({
    right: PropTypes.number.isRequired,
    stop: PropTypes.number.isRequired,
    wrong: PropTypes.number.isRequired,
  }).isRequired,
};
