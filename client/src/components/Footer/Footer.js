import React, { Component } from "react"

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            thisUrl: window.location.href,
            url: "http://localhost:3000",
            checkUrl: ""
        }
    }

    urlSlicer = () => {
        let checkUrl = this.state.thisUrl.slice(this.state.url.length + 1)
        let checker = checkUrl.slice(0, 5)
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

    componentWillMount() {
        this.setUrl()
        this.urlSlicer()
    }

    componentDidUpdate() {
        this.setUrl()
        this.urlSlicer()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.checkUrl === this.urlSlicer()
    }

    render() {
        let { checkUrl } = this.state
        if (checkUrl === "share" || checkUrl === "login") return null
        else return <p> &copy; 2017 Boomtown Corp. All Rights Reserved </p>
    }
}

export default Footer
