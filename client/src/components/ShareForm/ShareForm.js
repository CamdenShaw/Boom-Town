import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"
import ExpandTransition from "material-ui/internal/ExpandTransition"
import TextField from "material-ui/TextField"

import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';

import "./styles.css"
/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

export default VerticalLinearStepper;

class ShareForm extends Component {
    state = {
        loading: false,
        finished: false,
        stepIndex: 0
    }

    dummyAsync = cb => {
        this.setState({ loading: true }, () => {
            this.asyncTimer = setTimeout(cb, 500)
        })
    }

    handleNext = () => {
        const {stepIndex} = this.state 
        if(!this.state.loading){
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2
            }))
        }
    }

    handlePrev = () => {
        const { stepIndex } = this.state 
        if(!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 2
            }))
        }
    }

    getStepContent(stepIndex){
        switch(stepIndex){
            case 0:
            return(
                <p>Select campaign settings...</p>
            )
            case 1:
                return(
                    <div><TextField style={{marginTop: 0}} floatingLabelText="Ad group name" />
                        <p>Ad Group Status...</p>
                        <p>Something something whatver cool</p>
                    </div>
                )
            case 2:
                return(
                    <p>Try out different add text...</p>
                )
            default:
                return 'You\'re a long way from home sonny Jim!'
        }
    }

    renderContent(){
        const {finished, stepIndex} = this.state 
        const contentStyle = {margin: '0 16px', overflow: 'hidden'}
        if(finished) {
            return(
                <div style={contentStyle}>
                    <p>
                        <a href='#'
                            onclick={event => {
                                event.preventDefault()
                                this.setState({
                                    stepIndex: 0,
                                    finished: false
                                })
                            }}
                        >
                            Click Here
                        </a> to reset the example
                    </p>
                </div>
            )
        }
        return (
            <div style={contentStyle}>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{marginTop: 24, marginBottom: 12}} >
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onClick={this.handlePrev}
                        style={{marginRight: 12}}
                    />
                    <RaisedButton
                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                        primary={true}
                        onClick={this.handleNext}
                    />
                </div>
            </div>
        )
    }

    render() {
        const { loading, stepIndex } = this.state
        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex} >
                    <Step>
                        <StepLabel>Select campaign settings</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create and ad group</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create an ad</StepLabel>
                    </Step>
                </Stepper>
                <ExpandTransition loading={loading} open={true} >
                    {this.renderContent()}
                </ExpandTransition>
            </div>
        )
    }
}

// export default ShareForm
