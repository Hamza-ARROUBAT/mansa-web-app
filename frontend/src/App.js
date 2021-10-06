import AppLayoutConnected from 'AppLayoutConnected';
import AppLayoutDisconnected from 'AppLayoutDisconnected';
import ChangePassword from 'pages/ChangePassword';
import ContributorCompletedRequests from 'pages/ContributorCompletedRequests';
import VerifierCompletedRequests from 'pages/VerifierCompletedRequests';
import Contribute from 'pages/Contribute';
import Login from 'pages/Login';
import ContributorManageUsers from 'pages/ContributorManageUsers';
import VerifierManageUsers from 'pages/VerifierManageUsers';
import ContributorNewIncomingRequests from 'pages/ContributorNewIncomingRequests';
import VerifierNewIncomingRequests from 'pages/VerifierNewIncomingRequests';
import Profile from 'pages/Profile';
import Verify from 'pages/Verify';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      {user.isConnected ? (
        <AppLayoutConnected>
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            {user.data.role === 'adminContributor' && (
              <>
                <Route exact path="/contribute">
                  <Contribute />
                </Route>
                <Route exact path="/manage-users">
                  <ContributorManageUsers />
                </Route>
                <Route exact path="/new-incoming-requests">
                  <ContributorNewIncomingRequests />
                </Route>
                <Route exact path="/completed-requests">
                  <ContributorCompletedRequests />
                </Route>
              </>
            )}
            {user.data.role === 'adminVerifier' && (
              <>
                <Route exact path="/verify">
                  <Verify />
                </Route>
                <Route exact path="/manage-users">
                  <VerifierManageUsers />
                </Route>
                <Route exact path="/new-incoming-requests">
                  <VerifierNewIncomingRequests />
                </Route>
                <Route exact path="/completed-requests">
                  <VerifierCompletedRequests />
                </Route>
              </>
            )}
            <Route exact path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </AppLayoutConnected>
      ) : (
        <AppLayoutDisconnected>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </AppLayoutDisconnected>
      )}
    </Router>
  );
}
