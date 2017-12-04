import React, { Component } from "react"
import {RaisedButton, FlatButton, ExpandTransition, TextField, SelectField, LinearProgress} from "material-ui"
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper'

import placeholderImage from "../../images/item-placeholder.jpg"
import Search from "../Search"
import "./styles.css"

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class ShareForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            finished: false,
            stepIndex: 0,
            step2Enabled: false,
            title: ''
        }
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
                label={stepIndex === 3 ? 'Confirm' : 'Next'}
                disableTouchRipple={true}
                disableFocusRipple={true}
                onClick={stepIndex === 3 ? this.props.submit : this.handleNext}
                style={{marginRight: 12}}
                disabled={stepIndex === 0 ? this.props.imageUrl === placeholderImage : stepIndex === 1 ? !this.state.step2Enabled : false}
            />
            {step > 0 && (
                <RaisedButton
                    secondary={true}
                    label="Back"
                    disabled={stepIndex === 0}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onClick={this.handlePrev}
                />
            )}
            </div>
        )
    }

    handleChange = (e) => {
        if(e.target.value.length > 1) this.setState({
            step2Enabled: true
        })
        else this.setState({
            step2Enabled: false
        })
    }

    componentDidUpdate() {
        this.props.imageUrl !== placeholderImage && this.props.loading === false && this.state.stepIndex === 0 && this.handleNext()
    }

    render() {
        const {finished, stepIndex} = this.state;
        const { grabImage } = this.props

        return (
        <div style={{maxHeight: 400, margin: 'auto'}}>
            <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
                <StepLabel>Add an Image</StepLabel>
                <StepContent>
                    <p className="step-content" >
                        We live in a visual culture.  Upload an image of the item you're sharing.
                    </p>
                {this.props.loading ? <LinearProgress /> 
                : <RaisedButton overlayStyle={{paddingLeft: 20, paddingRight: 20}} buttonStyle={{textTransform: "uppercase"}}className="image-button" labelStyle={{height: "100%", width: "100%", opacity: 0, padding: 0, position: "absolute", left: 0}} children="select an image" label={
                    <input onChange={e =>{ 
                        grabImage(e)
                    }
                    } className="image-input" type="file" />} />}
                {this.renderStepActions(0)}
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Add a Title and Description</StepLabel>
                <StepContent>
                    <p className="step-content" >Folks need to know what you're sharing.  Give them a clue by adding a title & description.</p>
                    <TextField 
                        onChange={e => this.handleChange(e)} 
                        onBlur={e => {
                            this.setState({title: e.target.value})
                            this.props.handleText(e, 'title')
                        }} 
                        fullWidth={true} 
                        hintText="Title" 
                        floatingLabelText="Title"
                        floatingLabelShrinkStyle={{color: "white"}}
                    />
                    <TextField onBlur={e => this.props.handleText(e, 'description')}
                        fullWidth={true}
                        hintText="Description"
                        floatingLabelText="Description"
                        floatingLabelShrinkStyle={{color: "white"}}
                        multiLine={true} rows={4} />
                        {this.renderStepActions(1)}
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Categorize Your Item</StepLabel>
                <StepContent>
                <p className="step-content" >
                    To share an item, you will add it to our list of categories.  You can select multiple categories.
                </p>
                <Search values={this.props.values} submitValues={this.props.submitValues} />
                {this.renderStepActions(2)}
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Confirm Things!</StepLabel>
                <StepContent>
                <p className="step-content" >
                    Great!  If you're happy with everything, tap the 'confirm' button.
                </p>
                {this.renderStepActions(3)}
                </StepContent>
            </Step>
            </Stepper>
        </div>
        );
    }
}

// class ShareForm extends Component {
//     state = {
//         loading: false,
//         finished: false,
//         stepIndex: 0
//     }

//     dummyAsync = cb => {
//         this.setState({ loading: true }, () => {
//             this.asyncTimer = setTimeout(cb, 500)
//         })
//     }

//     handleNext = () => {
//         const {stepIndex} = this.state 
//         if(!this.state.loading){
//             this.dummyAsync(() => this.setState({
//                 loading: false,
//                 stepIndex: stepIndex + 1,
//                 finished: stepIndex >= 2
//             }))
//         }
//     }

//     handlePrev = () => {
//         const { stepIndex } = this.state 
//         if(!this.state.loading) {
//             this.dummyAsync(() => this.setState({
//                 loading: false,
//                 stepIndex: stepIndex - 2
//             }))
//         }
//     }

//     getStepContent(stepIndex){
//         switch(stepIndex){
//             case 0:
//             return(
//                 <p>Select campaign settings...</p>
//             )
//             case 1:
//                 return(
//                     <div><TextField style={{marginTop: 0}} floatingLabelText="Ad group name" />
//                         <p>Ad Group Status...</p>
//                         <p>Something something whatver cool</p>
//                     </div>
//                 )
//             case 2:
//                 return(
//                     <p>Try out different add text...</p>
//                 )
//             default:
//                 return 'You\'re a long way from home sonny Jim!'
//         }
//     }

//     renderContent(){
//         const {finished, stepIndex} = this.state 
//         const contentStyle = {margin: '0 16px', overflow: 'hidden'}
//         if(finished) {
//             return(
//                 <div style={contentStyle}>
//                     <p>
//                         <a href='#'
//                             onclick={event => {
//                                 event.preventDefault()
//                                 this.setState({
//                                     stepIndex: 0,
//                                     finished: false
//                                 })
//                             }}
//                         >
//                             Click Here
//                         </a> to reset the example
//                     </p>
//                 </div>
//             )
//         }
//         return (
//             <div style={contentStyle}>
//                 <div>{this.getStepContent(stepIndex)}</div>
//                 <div style={{marginTop: 24, marginBottom: 12}} >
//                     <FlatButton
//                         label="Back"
//                         disabled={stepIndex === 0}
//                         onClick={this.handlePrev}
//                         style={{marginRight: 12}}
//                     />
//                     <RaisedButton
//                         label={stepIndex === 2 ? 'Finish' : 'Next'}
//                         primary={true}
//                         onClick={this.handleNext}
//                     />
//                 </div>
//             </div>
//         )
//     }

//     render() {
//         const { loading, stepIndex } = this.state
//         return (
//             <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
//                 <Stepper activeStep={stepIndex} >
//                     <Step>
//                         <StepLabel>Select campaign settings</StepLabel>
//                     </Step>
//                     <Step>
//                         <StepLabel>Create and ad group</StepLabel>
//                     </Step>
//                     <Step>
//                         <StepLabel>Create an ad</StepLabel>
//                     </Step>
//                 </Stepper>
//                 <ExpandTransition loading={loading} open={true} >
//                     {this.renderContent()}
//                 </ExpandTransition>
//             </div>
//         )
//     }
// }

export default ShareForm
