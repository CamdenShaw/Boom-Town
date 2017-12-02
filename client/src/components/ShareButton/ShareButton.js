import React, { Component } from "react"
import FloatingActionButton from "material-ui/FloatingActionButton"
import { Link } from "react-router-dom"
import ContentAdd from "material-ui/svg-icons/content/add"

class ShareButton extends Component {
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
        if (this.state.checkUrl === checkUrl.slice(0, 5)) return checker
        else {
            this.setState({
                checkUrl: checker
            })
            return checker
        }
    }

    setUrl = () => {
        if (this.state.thisUrl === window.location.href) return ""
        else {
            this.setState({
                thisUrl: window.location.href
            })
        }
    }

    componentWillMount() {
        this.setUrl()
        this.urlSlicer()
    }

    componentWillUpdate() {
        this.setUrl()
        this.urlSlicer()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.checkUrl === this.urlSlicer()
    }

    render() {

        let { checkUrl } = this.state
            return (
              checkUrl === "share" ? null : checkUrl === "login" ? null 
              : <Link to="/share">
                    <div className="share">
                        <FloatingActionButton>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </Link>
            )
    }
}

export default ShareButton
