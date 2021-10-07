import AppLayoutConnected from 'AppLayoutConnected';
import AppLayoutDisconnected from 'AppLayoutDisconnected';
import ChangePassword from 'pages/ChangePassword';
import ContributorAcceptedContributions from 'pages/AdminContributor/ContributorAcceptedContributions';
import PendingContributions from 'pages/AdminContributor/PendingContributions';
import VerifierAcceptedContributions from 'pages/AdminVerifier/VerifierAcceptedContributions';
import Contribute from 'pages/AdminContributor/Contribute';
import Login from 'pages/Login';
import ContributorManageUsers from 'pages/AdminContributor/ContributorManageUsers';
import VerifierManageUsers from 'pages/AdminVerifier/VerifierManageUsers';
import ContributorResendedContributions from 'pages/AdminContributor/ContributorResendedContributions';
import VerifierNewIncomingRequests from 'pages/AdminVerifier/VerifierNewIncomingRequests';
import Profile from 'pages/Profile';
import Verify from 'pages/AdminVerifier/Verify';
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
            {user.data.role === 'Admin Contributor' && (
              <>
                <Route exact path="/contribute">
                  <Contribute />
                </Route>
                <Route exact path="/manage-users">
                  <ContributorManageUsers />
                </Route>
                <Route exact path="/pending-contributions">
                  <PendingContributions />
                </Route>
                <Route exact path="/resended-contributions">
                  <ContributorResendedContributions />
                </Route>
                <Route exact path="/accepted-contributions">
                  <ContributorAcceptedContributions />
                </Route>
              </>
            )}
            {user.data.role === 'Admin Verifier' && (
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
                <Route exact path="/accepted-contributions">
                  <VerifierAcceptedContributions />
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
