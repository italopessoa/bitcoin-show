import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchQuestion, fetchAwards } from './actions/questionActions'
import Options from './containers/OptionsPanel'
import Question from './containers/QuestionPanel'
import Tools from './containers/Tools'
import Cards from './containers/Cards'
import CardPanel from './components/CardPanel'
import LoadingPanel from './components/LoadingPanel'
import './index.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchAwards()
    this.props.fetchQuestion(this.props.award.level, this.props.previousQuestions)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.mustUpdateQuestion) {
      this.props.fetchQuestion(this.props.award.level, this.props.previousQuestions)
    }
  }
  createAwardCard(value) {
    // TODO: add padding settins as default values to CardPanel
    return (
      <CardPanel
        style={{ paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}
        className="yellow">
        <span>
          <h6>
            <i className="fa fa-btc" aria-hidden="true" /> {value}
          </h6>
        </span>
      </CardPanel>
    )
  }
  render() {
    return (
      <div>
        <header>
          <nav className="blue darken-3">
            <div className="nav-wrapper">
              <div className="container">
                <Tools />
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="row">
            <div className="col l8 push-l2">
              <LoadingPanel backgroundColor={'#ecdede'} opacity={0.8} loading={this.props.isFetching}>
                {this.props.mustDisplayCards && <Cards />}
                <CardPanel
                  style={{ paddingTop: '10px' }}
                  className="blue darken-3 zero-padding-left"
                >
                  <div>
                    {/* question */}
                    <div className="row">
                      <div className="col m12 zero-padding-left">
                        <Question />
                      </div>
                    </div>
                    {/* options */}
                    <div className="row">
                      <div className="col m9">
                        <Options />
                      </div>
                    </div>
                    {/* awards */}
                    <div className="row">
                      <div className="col m2">
                        {this.createAwardCard(this.props.award.success)}
                      </div>
                      <div className="col m2">
                        {this.createAwardCard(this.props.award.quit)}
                      </div>
                      <div className="col m2">
                        {this.createAwardCard(this.props.award.fail)}
                      </div>
                    </div>
                  </div>
                </CardPanel>
              </LoadingPanel>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
    award: state.questionData.currentAwardValue,
    mustUpdateQuestion: state.questionData.mustUpdateQuestion,
    isFetching: state.questionData.isFetching,
    mustDisplayCards: state.questionData.mustDisplayCards,
    previousQuestions: state.questionData.previousQuestions,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQuestion,
    fetchAwards,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

App.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchAwards: PropTypes.func.isRequired,
  mustUpdateQuestion: PropTypes.bool.isRequired,
  award: PropTypes.shape({
    id: PropTypes.number.isRequired,
    success: PropTypes.number.isRequired,
    fail: PropTypes.number.isRequired,
    quit: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  mustDisplayCards: PropTypes.bool.isRequired,
  previousQuestions: PropTypes.arrayOf(PropTypes.number).isRequired,
}

App.defaultProps = {
  shouldStopProgress: false,
  userFailed: false,
}
