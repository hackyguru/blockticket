import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { useMoralis } from "react-moralis";

const App = () => {
  const { authenticate, user, logout, isAuthenticated, isAuthenticating } =
    useMoralis();
  return (
    <div>
      <div className="gradient-bg-welcome w-full min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={isAuthenticated ? <Dashboard /> : <Landing />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
