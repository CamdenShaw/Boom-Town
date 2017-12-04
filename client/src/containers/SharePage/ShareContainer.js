import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as firebase from "firebase"

import placeholderImage from "../../images/item-placeholder.jpg"
import Share from "./Share"

class ShareContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storageRef: firebase.storage().ref(),
            localTitle: "",
            imagePreview: placeholderImage,
            metadata: {
                contentType: "image/jpeg"
            },
            loading: false
        }
    }

    grabImage = e => {
        e.preventDefault()

        let reader = new FileReader()
        let file = e.target.files[0]
        let title = file.name
        let localTitle = title.split(".")
        this.state.storageRef.child(`images/${title}`).put(file, this.state.metadata)

        reader.onloadstart = () => {
            this.setState({
                loading: true
            })
        }

        reader.onloadend = () => {
            this.setState({
                localTitle: localTitle[0],
                imagePreview: reader.result,
                loading: false
            })
        }
        reader.readAsDataURL(file)
    }

    render() {
        let { localTitle, loading, imagePreview } = this.state
        console.log(this.props)
        return (
            !this.props.user ? <p>loading</p>
            : <Share
                grabImage={this.grabImage}
                imageUrl={imagePreview}
                loading={loading}
                {...this.props}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(ShareContainer)
