import { CREATE_QUESTION_FAILED, GET_ALL_QUESTIONS, GET_QUESTIONS_FAILED, STORE_POLL_DETAILS } from "../types";
import { _saveQuestion, _getQuestions, _saveQuestionAnswer } from "../../api";
import { isLoading } from "./pageActions";

export const createNewQuestion = payload => {
    return async dispatch => {
        try {
            dispatch(isLoading(true));
            await _saveQuestion(payload);
        }
        catch(error) {
            dispatch({ type: CREATE_QUESTION_FAILED, error });
        }
        finally {
            dispatch(isLoading(false));
        }
    }
}

export const getAllQuestions = (loader) => {
    return async dispatch => {
        try {
            if(loader) dispatch(isLoading(true))
            const questions = await _getQuestions();
            dispatch({ type: GET_ALL_QUESTIONS, payload: questions });
        }
        catch(error) {
            dispatch({ type: GET_QUESTIONS_FAILED, error });
        }
        finally {
            if(loader) dispatch(isLoading(false));
        }
    }
}

export const saveQuestionAnswer = payload => {
    return async dispatch => {
        await _saveQuestionAnswer(payload);
        const questions = await _getQuestions();
        const questionDetails = questions[payload.qid];
        dispatch(updatePollDetails(questionDetails));
    }
};

export const storePollDetails = question_id => {
    return async dispatch => {
        try {
            dispatch(isLoading(true))
            const questions = await _getQuestions();
            const questionDetails = questions[question_id];
            dispatch(updatePollDetails(questionDetails));
        } 
        catch(error) {
            dispatch({ type: GET_QUESTIONS_FAILED, error });
        }
        finally {
            dispatch(isLoading(false));
        }
    }
}

export const updatePollDetails = payload => ({
    type: STORE_POLL_DETAILS,
    payload
});