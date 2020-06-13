import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, authUser, ...rest } = this.props;
        return(
            <Route {...rest} render={(props) => (
                authUser.name
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/', state: { from: props.location }}} />
                )} 
            />
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.users.authUser
});

export default connect(mapStateToProps)(PrivateRoute);