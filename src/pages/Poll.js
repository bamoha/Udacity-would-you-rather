import React  from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { PollAnswerCard, PollDetailsCard } from "../components";
import { storePollDetails } from "../store/actions/questionAction";

class PollDetailsPage extends React.Component {

    componentDidMount() {
        const { match: { params }, dispatch } = this.props;
        const question_id = params.question_id;
        dispatch(storePollDetails(question_id));
    };

    render() {
        const { users, authUser, pollDetails, loading } = this.props;
        let checker = false;
        if (pollDetails.optionOne && pollDetails.optionTwo) {
            if (pollDetails.optionOne.votes.includes(authUser.id)|| pollDetails.optionTwo.votes.includes(authUser.id)) {
                checker = true;
            }
        }

        return (
            <Layout title="Poll Details">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {loading ?
                            <p className="text-center"><i className="fa fa-spinner fa-spin"></i> Loading ....</p> :
                            !checker ? <PollAnswerCard /> :
                            <PollDetailsCard auth={authUser} users={users} question={pollDetails} />
                        }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
    users: state.users.users,
    authUser: state.users.authUser,
    pollDetails: state.questions.pollDetails,
    loading: state.ui.loading
});

export default connect(mapStateToProps)(withRouter(PollDetailsPage));