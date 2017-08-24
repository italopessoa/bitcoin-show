import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from './actions/questionActions';
import fetchAwards, { updateAward } from './actions/awardActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.shouldUpdateQuestion) {
      if (nextProps.award.number === this.props.award.number) {
        this.props.updateAward();
      } else {
        this.props.fetchQuestion(this.props.award.level);
      }
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.fetchQuestion(this.props.award.level);
          this.props.fetchAwards();
        }}>Carregar</button>
        <div>
          {this.props.questionData.questionLoadCompleted && <Question />}
          {this.props.questionData.questionLoadCompleted && <Options />}
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
                <td>{this.props.award.right}</td>
                <td>{this.props.award.stop}</td>
                <td>{this.props.award.wrong}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    questionData: state.questionData,
    award: state.awardData.value,
    shouldUpdateQuestion: state.questionData.shouldUpdateQuestion,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
    fetchAwards,
    updateAward,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchAwards: PropTypes.func.isRequired,
  updateAward: PropTypes.func.isRequired,
  shouldUpdateQuestion: PropTypes.bool.isRequired,
  award: PropTypes.shape({
    number: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    stop: PropTypes.number.isRequired,
    wrong: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};
