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
            fetchItem: {
                itemowner: undefined,
                imageurl: undefined,
                description: "",
                tags: [],
                title: ""
            },
            loading: false
        }
    }

    componentDidUpdate() {
        !this.state.fetchItem.itemowner && this.props.auth && this.setState({
            fetchItem: {
                ...this.state.fetchItem,
                itemowner: this.props.user.uid
            }
        })
    }

    grabImage = e => {
        e.preventDefault()

        let reader = new FileReader()
        let file = e.target.files[0]
        let title = file.name
        let localTitle = title.split(".")
        let firebaseFile = this.state.storageRef.child(`images/${title}`).put(file, this.state.metadata)
        let uploading = "uploading"

        reader.onloadstart = () => {
            this.setState({
                loading: true
            })
        }

        reader.onloadend = () => {
            this.setState({
                localTitle: localTitle[0],
                imagePreview: reader.result
            })
        }
        reader.readAsDataURL(file)
        firebaseFile.on("state_changed",
            snapshot => {
                switch(snapshot.state) {
                    case "paused":
                        console.log("upload paused")
                        break
                    case "running":
                        console.log(uploading)
                        uploading += "." 
                        break
                }
            }, error => {
                switch(error.code) {
                    case "storage/unauthorized":
                        console.log("upload not authorized", error)
                        break
                    case "storage/cancelled":
                        console.log("upload cancelled", error)
                }
            }, () => {
                this.setState({
                    fetchItem: {
                        ...this.state.fetchItem,
                        imageurl: firebaseFile.snapshot.downloadURL
                    },
                    loading: false
                })
            }
        )
    }

    handleText = (e, type) => {
        let x = e.target.value
        if(type === "description"){
            this.setState({
               fetchItem: {
                   ...this.state.fetchItem,
                   description: x
               }
            })
        }
        if (type === "title"){
            this.setState({
                fetchItem: {
                    ...this.state.fetchItem,
                    title: x
                }
            })
        }
    }

    submitValues = (event, index, values) => {
        let tags = values
        this.setState({
            fetchItem: {
                ...this.state.fetchItem,
                tags
            }
        })
    }

    submitForm = () => {
        console.log(this.state.fetchItem)
    }

    render() {
        let { localTitle, loading, imagePreview, imageurl } = this.state
        return (
            !this.props.user ? <p>loading</p>
            : <Share
                grabImage={this.grabImage}
                imageUrl={imagePreview}
                loading={loading}
                handleText={this.handleText}
                addTags={this.addTags}
                submitValues={this.submitValues}
                values={this.state.fetchItem.tags}
                submit={this.submitForm}
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
