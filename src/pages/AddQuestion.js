import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader} from "reactstrap";
import { Button } from "../components/index";
import { createNewQuestion } from "../store/actions/questionAction";

class AddQuestionPage extends React.Component {

    state = {
        option1: "",
        option2: ""
    };

    onChangeHandler = (event) => {
        const { value, name } = event.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { dispatch, authUser, history } = this.props;
        const { option1, option2 } = this.state;
        const payload = {
            optionOneText: option1, 
            optionTwoText: option2, 
            author: authUser.id
        }
        dispatch(createNewQuestion(payload));
        history.push("/home");
    }

    render() {
        const { option1, option2 } = this.state;
        const { loading } = this.props;

        return (
            <Layout title="Add">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Card>
                            <CardHeader>
                                <h2 className="text-center">Create New Question</h2>
                            </CardHeader>
                            <CardBody>
                                <p>Please complete the question</p>
                                <h5>Would you rather ...</h5>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input 
                                            className="form-control" 
                                            name="option1" 
                                            value={option1}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter option one text here..."
                                            required
                                        />
                                    </div>
                                    <div className="dividerWrapper">
                                        <div className="divider">
                                            <span>OR</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            className="form-control" 
                                            name="option2" 
                                            value={option2}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter option two text here..."
                                            required
                                        />
                                    </div><hr/>
                                    <Button type="submit" title={`${!loading ? "Submit" : "Loading..."}`} style={{width: '100%'}} />
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.page.loading,
    authUser: state.users.authUser
});

export default connect(mapStateToProps)(withRouter(AddQuestionPage));