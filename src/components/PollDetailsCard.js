import React from 'react';
import { connect } from "react-redux";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Image, OptionDetails } from "./index";

class PollDetailsCard extends React.Component {

    render() {
        const { pollDetails, users, authUser } = this.props;
        const { author, optionOne, optionTwo } = pollDetails;

        return (
            <Card>
                <CardHeader>
                    <span><strong>Asked by {`${users[author] ? users[author].name : ''}`}</strong></span>
                </CardHeader>
                <CardBody style={{padding: '5px'}}>
                    <div className="wrapper" style={{border: 0}}>
                        <div className="avatarWrapper">
                            <Image user={`${users[author] ? users[author].id : ''}`} className="pic" />
                        </div>
                        <div className="detailsWrapper">
                            <div>
                                <h4>Options</h4>
                                <OptionDetails auth={authUser} details={optionOne} users={users} />
                                <OptionDetails auth={authUser} details={optionTwo} users={users} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.users.authUser,
    users: state.users.users,
    pollDetails: state.questions.pollDetails,
});

export default connect(mapStateToProps)(PollDetailsCard);