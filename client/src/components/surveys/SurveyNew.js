//SurveyNew shows SurveyForm and SurveyNew
import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        );
    }
}

export default SurveyNew;
