import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import './index.css';

function Courses({ courses }) {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, Courses, id, screen] = pathname.split("/");
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div class="d-flex align-items-center mt-3 top-info">
        <i class="fas fa-bars text-danger me-3 ms-3"></i>
        <nav aria-label="breadcrumb" className="d-flex align-items-center flex-grow-1">
          <span className="course-name">{course.name}</span>
          <span className="course-arrow">&nbsp;&gt;&nbsp;</span>
          <span className="course-screen">{screen}</span>
        </nav>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
