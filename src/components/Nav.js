import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../store/actions/usersAction";
import { Image } from "./index";

class Nav extends React.Component {

    logout = () => {
        const { dispatch, history } = this.props;
        dispatch(logoutUser());
        history.push("/");
    }

    render() {
        const { active, authUser } = this.props;

        return (
            <ul className="nav-custom">
                <div className="container">
                    <li>
                        <Link to="/home" className={`${active === 'Home' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link to="/add" className={`${active === 'Add' ? 'active' : ''}`}>New Question</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" className={`${active === 'Leaderboard' ? 'active' : ''}`}>Leader Board</Link>
                    </li>
                    <li style={{float: 'right'}}>
                        <a href="#logout" onClick={this.logout}>Logout</a>
                    </li>
                    {authUser && authUser.name && (
                        <li style={{float: 'right'}}>
                            <a href="#user">
                                <Image user={`${authUser.id}`} className="pic" style={{width: '30px', height: '30px'}} />
                                {authUser.name}
                            </a>
                        </li>
                    )}
                </div>
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.users.authUser,
});

export default connect(mapStateToProps)(withRouter(Nav));