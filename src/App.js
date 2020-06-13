import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LeaderboardPage, AddQuestionPage, LoginPage, PollDetailsPage, Page404} from "./pages";
import { ProtectedRoute } from "./components/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute path="/leaderboard" component={LeaderboardPage} />
        <ProtectedRoute path="/add" component={AddQuestionPage} />
        <ProtectedRoute path="/question/:question_id" component={PollDetailsPage} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;