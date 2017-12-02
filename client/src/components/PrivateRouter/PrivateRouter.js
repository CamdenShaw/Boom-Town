import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth === false ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        userId: state.auth.user
    }
}

export default connect(mapStateToProps)(PrivateRoute)
