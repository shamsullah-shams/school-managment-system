import React, { Suspense, useState } from "react";
import Dashboard from "./containers/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Cotext";

// @@ Lazy Loading
const Students = React.lazy(() => import("./components/Students/Students"));
const TimeTable = React.lazy(() => import("./components/TimeTable/Timetable"));
const Users = React.lazy(() => import("./components/Users/Users"));
const Classes = React.lazy(() => import("./components/Classes/Classes"));
const Sections = React.lazy(() => import("./components/Sections/Sections"));
const Administrative = React.lazy(() => import("./components/Administrative/Administrative"));
const Exams = React.lazy(() => import("./components/Exams/Exams"));
const Subjects = React.lazy(() => import("./components/Subjects/Subjects"));
const ManageAccount = React.lazy(() => import("./components/MyAccount/MyAccount"));



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
