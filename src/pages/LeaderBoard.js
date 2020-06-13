import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { getUsersAction } from "../store/actions/usersAction";
import { Ranking } from "../components";

class LeaderboardPage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getUsersAction());
    }

    render() {
        return (
            <Layout title="Leaderboard">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Ranking />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

export default connect(null)(LeaderboardPage);