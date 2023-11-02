import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div class="d-flex justify-content-between">
        <input
          type="text"
          class="form-control w-25"
          placeholder="Search for Assignment"
        />

        <div class="d-flex">
          <button type="button" class="btn btn-secondary me-1">
            <i class="fa-solid fa-plus"></i>
            Group
          </button>

          <Link to={`/Kanbas/Courses/${courseId}/Assignments/newassignment`}>
            <button type="button" className="btn btn-danger me-1">
              <i className="fa-solid fa-plus"></i> Assignment
            </button>
          </Link>

          <button type="button" class="btn btn-secondary">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary mt-3 module-title">
          <div className="d-flex justify-content-between align-items-center">
            <strong>
              <i class="fas fa-ellipsis-v me-2"></i>
              Assignments for course {courseId}
            </strong>
            <span>
              <span
                class="rounded px-2 py-1"
                style={{ border: "1px solid #000" }}
              >
                40% of Total
              </span>
              <i class="fas fa-plus ms-2"></i>
              <i class="fas fa-ellipsis-v ms-2"></i>
            </span>
          </div>
        </div>
        <div className="list-group">
          {courseAssignments.map((assignment, index) => (
            <div key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center position-relative">
                  <i
                    class="fas fa-ellipsis-v position-absolute me-2"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  ></i>
                  <i
                    class="fa-regular fa-pen-to-square position-absolute me-2"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "1rem",
                      color: "green",
                    }}
                  ></i>
                  <div class="content ms-5">
                    <strong onClick={() => dispatch(setAssignment(assignment))}>
                      <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        class="text-decoration-none text-dark"
                      >
                        {assignment.title}
                      </Link>
                    </strong>
                    <p className="mb-0">{assignment.description}</p>
                    <p className="text-muted fs-6 mb-0">
                      Due {assignment.dueDate} | Available From{" "}
                      {assignment.availableFromDate} | Until{" "}
                      {assignment.availableUntilDate} | {assignment.points}pt
                    </p>
                  </div>
                </div>
                <span>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this assignment?')) {
                        dispatch(deleteAssignment(assignment._id));
                      }
                    }}
                  >
                    Delete
                  </button>
                  <i class="fas fa-check-circle checkmark ms-2"></i>
                  <i class="fas fa-ellipsis-v ms-2"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
