import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion, fetchAwards } from './actions/questionActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';
import Tools from './containers/Tools';
import Cards from './containers/Cards';

class App extends Component {
  componentDidMount() {
    this.props.fetchAwards();
    this.props.fetchQuestion(this.props.award.level);
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.shouldStopProgress) {
    //   console.log('voce parou');
    // }
    // if (nextProps.userFailed) {
    //   console.log('voce errou');
    // }
    if (nextProps.mustUpdateQuestion) {
      this.props.fetchQuestion(this.props.award.level);
    }
  }
  render() {
    return (
      <div>
        {this.props.isFetching && <img src={'loading.gif'} alt="carregando..." />}
        {this.props.mustDisplayCards && <Cards />}
        <div>
          <Tools />
          <Question />
          <Options />
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
    award: state.questionData.currentAwardValue,
    mustUpdateQuestion: state.questionData.mustUpdateQuestion,
    isFetching: state.questionData.isFetching,
    // shouldStopProgress: state.tools.stopProgress,
    mustDisplayCards: state.questionData.mustDisplayCards,
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
  mustUpdateQuestion: PropTypes.bool.isRequired,
  award: PropTypes.shape({
    number: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    stop: PropTypes.number.isRequired,
    wrong: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  mustDisplayCards: PropTypes.bool.isRequired,
  // shouldStopProgress: PropTypes.bool,
  // userFailed: PropTypes.bool,
};

App.defaultProps = {
  shouldStopProgress: false,
  userFailed: false,
};
