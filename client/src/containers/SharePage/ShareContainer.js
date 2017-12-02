import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Share from "./Share"

class ShareContainer extends Component {
    render() {
        return <Share />
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        user: state.auth.user
    }
}

export default connect()(ShareContainer)
