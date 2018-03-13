import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"
import { getUser } from "../../redux/modules/authReducer"
import userIdFetch from "../../redux/modules/authReducer"

class HeaderContainer extends Component {
    constructor() {
        super()
        this.state = {
            thisUrl: window.location.href,
            url: "http://localhost:3000",
            checkUrl: "",
            userId: ""
        }
    }

    urlSlicer = () => {
        let checkerUrl = window.location.href.slice(this.state.url.length + 1)
        let checker = checkerUrl.slice(0, 5)
        if (this.state.checkUrl === checker) return checker
        else {
            this.setState({
                checkUrl: checker
            })
            return checker
        }
    }

    setUrl = () => {
        if (this.state.thisUrl === window.location.href) return ""
        else
            this.setState({
                thisUrl: window.location.href
            })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.usrId === "" && nextProps.headUserId)
            this.setState({
                userId: nextProps.headUserId
            })
    }

    componentDidMount() {
        this.setUrl()
        // this.props.dispatch(userIdFetch())
        this.urlSlicer()
    }

    componentWillUpdate() {
        this.setUrl()
        this.urlSlicer()
    }

    componentDidUpdate() {
        if (this.state.thisUrl !== window.location.href) this.forceUpdate()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            (this.state.thisUrl !== window.location.href &&
                this.props.headUserId == undefined) ||
            !this.props.headUserId
        )
    }

    render() {
        let { checkUrl } = this.state
        let { headUserId, headAuth } = this.props
        console.log(checkUrl)
        if (checkUrl === "login") return null
        else
            return headUserId ? (
                <AppBar
                    titleStyle={{ display: "none" }}
                    style={{
                        display: "flex",
                        width: "100vw",
                        height: 64,
                        justifyContent: "space-between"
                    }}
                    iconElementLeft={<HeaderLeft url={this.state.checkUrl} />}
                    iconElementRight={<HeaderRight userId={headUserId} />}
                />
            ) : (
                <p>loading</p>
            )
    }
}

HeaderContainer.propTypes = {
    user: PropTypes.object
}

function mapStateToProps(state) {
    return {
        headUserId: state.auth.userId,
        headAuth: state.auth.auth
    }
}

export default connect(mapStateToProps)(HeaderContainer)
