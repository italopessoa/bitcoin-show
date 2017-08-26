import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestion } from './actions/questionActions';
import fetchAwards, { updateAward } from './actions/awardActions';
import { skipCompleted, hideCards } from './actions/toolsActions';
import Options from './containers/OptionsPanel';
import Question from './containers/QuestionPanel';
import Tools from './containers/Tools';
import Cards from './components/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.questionHasChanged = this.questionHasChanged.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.mustDisplayCards) {
    }
    if (nextProps.shouldStopProgress) {
      console.log('voce parou');
    }
    if (!this.questionHasChanged(nextProps.questionData)) {
      if (nextProps.shouldSkipQuestion) {
        this.props.fetchQuestion(this.props.award.level);
      }
    } else if (nextProps.shouldSkipQuestion) {
      this.props.skipCompleted();
    }
    // if (nextProps.shouldSkipQuestion && !this.questionHasChanged(nextProps.questionData, this.props.questionData)) {
    //   this.props.fetchQuestion(this.props.award.level);
    // } else if (nextProps.shouldSkipQuestion && this.questionHasChanged(nextProps.questionData, this.props.questionData)) {
    //   this.props.skipCompleted();
    // }
    if (nextProps.userFailed) {
      console.log('voce errou');
    }
    if (nextProps.shouldUpdateQuestion) {
      if (nextProps.award.number === this.props.award.number) {
        this.props.updateAward();
      } else {
        this.props.fetchQuestion(this.props.award.level);
      }
    }
  }
  questionHasChanged(nextData) {
    return nextData.question.id !== this.props.questionData.question.id;
  }
  render() {
    return (
      <div>
        {this.props.mustDisplayCards && <Cards onClick={this.props.hideCards} />}
        <button onClick={() => {
          this.props.fetchQuestion(this.props.award.level);
          this.props.fetchAwards();
        }}
        >Carregar</button>
        <div>
          {this.props.questionData.question.id > 0 && <Tools />}
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
    award: state.awardData.value,
    shouldUpdateQuestion: state.questionData.shouldUpdateQuestion,
    shouldStopProgress: state.tools.stopProgress,
    shouldSkipQuestion: state.tools.skipQuestion,
    wasQuestionSkipped: state.tools.questionWasSkipped,
    mustDisplayCards: state.tools.displayCards,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
    fetchAwards,
    updateAward,
    skipCompleted,
    hideCards,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


App.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchAwards: PropTypes.func.isRequired,
  updateAward: PropTypes.func.isRequired,
  skipCompleted: PropTypes.func.isRequired,
  shouldUpdateQuestion: PropTypes.bool.isRequired,
  award: PropTypes.shape({
    number: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    stop: PropTypes.number.isRequired,
    wrong: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  shouldStopProgress: PropTypes.bool,
  shouldSkipQuestion: PropTypes.bool,
  userFailed: PropTypes.bool,
};

App.defaultProps = {
  shouldStopProgress: false,
  shouldSkipQuestion: false,
  userFailed: false,
};
