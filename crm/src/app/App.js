import React from 'react';
import LoginForm from '../components/login/LoginForm';
import Dashboard from '../components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
