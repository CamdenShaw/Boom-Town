import React from "react"
import PropTypes from "prop-types"
import { reduxForm, formValueSelector, Field } from "redux-form"

import RaisedButton from "material-ui/RaisedButton"
import Paper from "material-ui/Paper"

import ValidatedTextField from "../../components/ValidatedTextField"
import { Validator } from "../../components/ValidatedTextField"

import "./styles.css"
import logo from "../../images/boomtown-logo.svg"
import bottomLeft from "../../images/home-bl.svg"
import topRight from "../../images/home-tr.svg"

const Login = ({ login }) => (
    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form onSubmit={login} autoComplete="off">
                        <div>
                            <Field name="email" component={ValidatedTextField} />
                        </div>
                        <div>
                            <Field name="password" component={ValidatedTextField} />
                        </div>
                        <RaisedButton
                            className="enterButton"
                            primary
                            fullWidth
                            type="submit"
                        >
                            Enter
                        </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
)

const loginForm = reduxForm({
    form: "loginForm"
})(Login)

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default loginForm
