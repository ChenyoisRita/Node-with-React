import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const authenticatedUser = this.props.auth;
        return (
            <div className="container">
              <BrowserRouter>
                <div>
                  <Header />
       
                  {authenticatedUser ? (
                    <div>
                      <Redirect to="/surveys" />
                      <Route exact path="/surveys" component={Dashboard} />
                      <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                  ) : (
                    <div>
                      <Route exact path="/" component={Landing} />
                    </div>
                  )}
                </div>
              </BrowserRouter>
            </div>
          );
        }
      }
      function mapStateToProps({ auth }) {
        console.log(auth);
        return { auth };
      }
       
      export default connect(mapStateToProps, actions)(App);
      