import React from "react";
import Dashboard from "./containers/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/timetable"
          element={<Dashboard />}
        />
        <Route
          path="/users"
          element={<Dashboard />}
        />
        <Route
          path="/sections"
          element={<Dashboard />}
        />
        <Route path="/classes"
          element={<Dashboard />}
        />
        <Route
          path="/exams"
          element={<Dashboard />}
        />
        <Route
          path="/students"
          element={<Dashboard />}
        />
        <Route
          path="/myaccount"
          element={<Dashboard />}
        />
        <Route
          path="/subjects"
          element={<Dashboard />}
        />
        <Route
          path="/administrative"
          element={<Dashboard />}
        />
        <Route
          path="/dormitories"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
