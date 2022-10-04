import React, { useEffect, useState } from "react";
import Dashboard from "./containers/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Cotext";

function App() {
  const [showSideBarSpans, setShowSideBarSpans] = useState(true);




  return (
    <Context.Provider value={{ showSideBarSpans, setShowSideBarSpans }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/academics"
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
            path="/admitstudent"
            element={<Dashboard />}
          />
          <Route
            path="/studentinfo"
            element={<Dashboard />}
          />
          <Route
            path="/graduatedstudents"
            element={<Dashboard />}
          />
          <Route
            path="/studentpromotion"
            element={<Dashboard />}
          />
          <Route
            path="/dormitories"
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
