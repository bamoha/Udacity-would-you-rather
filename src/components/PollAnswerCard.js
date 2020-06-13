import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Image, Button } from "./index";
import { saveQuestionAnswer } from "../store/actions/questionAction";

class PollAnswerCard extends React.Component {

    state = {
        option: ""
    };

    onChangeHandler = event => {
        event.persist();
        this.setState(() => ({
            option: event.target.value
        }));
    }

    onSubmit = event => {
        event.preventDefault();
        const { option } = this.state;
        const { dispatch, authUser, pollDetails } = this.props;
        const payload =  {
            authedUser: authUser.id,
            qid: pollDetails.id,
            answer: option
        };
        
        dispatch(saveQuestionAnswer(payload));
    }

    render() {
        const { option } = this.state;
        const { pollDetails, users } = this.props;
        const { author, optionOne, optionTwo } = pollDetails;
        const option2 = optionTwo ? optionTwo.text : "";
        const option1 = optionOne ? optionOne.text : "";

        return (
            <Card>
                <CardHeader>
                    <span>{`${users[author] ? users[author].name : ''}`} asks:</span>
                </CardHeader>
                <CardBody style={{padding: '5px'}}>
                    <div className="wrapper" style={{border: 0}}>
                        <div className="avatarWrapper">
                            <Image user={`${users[author] ? users[author].id : ''}`} className="pic" />
                        </div>
                        <div className="detailsWrapper">
                            <div>
                                <h4>Would You Rather ... </h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group" style={{marginBottom: '5px'}}>
                                        <label>
                                            <input 
                                                type="radio" 
                                                checked={option === "optionOne"} 
                                                value="optionOne"
                                                onChange={this.onChangeHandler}
                                            />{" "}
                                            {option1}
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input 
                                                type="radio" 
                                                checked={option === "optionTwo"}
                                                value="optionTwo"
                                                onChange={this.onChangeHandler}
                                            />{" "}
                                            {option2}
                                        </label>
                                    </div>
                                    <Button type="submit" title="submit" style={{width: '100%'}} />
                                </form>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
};

const mapStateToProps = state => ({
    authUser: state.users.authUser,
    users: state.users.users,
    pollDetails: state.questions.pollDetails,
});

export default connect(mapStateToProps)(withRouter(PollAnswerCard));