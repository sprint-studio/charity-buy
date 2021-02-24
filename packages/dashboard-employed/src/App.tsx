import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import OnboardingPage from "./pages/onboarding-page";

function App() {
  return (
    <div className="p-10 h-screen flex items-center justify-center bg-green-600">
      <div className="h-full w-full">
        <Switch>
          <Route path="/onboarding">{OnboardingPage}</Route>
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
