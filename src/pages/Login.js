import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader} from "reactstrap";
import { getUsersAction, authenticateUser } from "../store/actions/usersAction";
import { Button } from "../components/index";

class HomePage extends React.Component {

    state = {
        selectedUser: {}
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getUsersAction());
    }

    onChangeHandler = (event) => {
        event.persist(); // preventing SyntheticEvent pooling
        this.setState(() => ({
            selectedUser: event.target.value
        }));
    }

    onSubmit = event => {
        event.preventDefault();
        const { dispatch, history } = this.props;
        const user = JSON.parse(this.state.selectedUser)
        dispatch(authenticateUser(user));
        history.push("/home");
    }

    render() {
        const { users } = this.props;
        let options = [];
        for (const property in users) {
            options.push(users[property]);
        }

        return (
            <div className="loginPage">
<div className="container" style={{marginTop: '30px'}}>
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            <CardHeader>
                                <h3 className="text-center">Welcome to Would you rather app!</h3>
                                <p className="text-center">Please sign in to continue</p>
                            </CardHeader>
                            <CardBody>
                                <h2 className="text-center">Sign in</h2>
                                <form onSubmit={this.onSubmit}>
                                    <select value={this.state.selectedUser} className="form-control" onChange={this.onChangeHandler} required>
                                        <option value="">--select user--</option>
                                        {options.map(user => (
                                            <option key={user.id} value={JSON.stringify(user)}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>
                                    <Button type="submit" title="Sign in" style={{marginTop: '20px', width: '100%'}} />
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps)(withRouter(HomePage));