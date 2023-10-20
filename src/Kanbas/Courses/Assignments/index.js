import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary mt-3 module-title">
          <div className="d-flex justify-content-between align-items-center">
            <strong>
              <i class="fas fa-ellipsis-v me-2"></i>
              Assignments for course {courseId}
            </strong>
            <span>
                  <span class="rounded px-2 py-1" style={{ border: "1px solid #000" }}
                    >40% of Total</span
                  >
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
                      color: "green"
                  }}
                  ></i>
                  <div class="content ms-5">
                    <strong
                      ><Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      class="text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link></strong
                    >
                    <p class="text-muted fs-6 mb-0">
                      week0 | Due Sep 18 | 100pt
                    </p>
                  </div>
                </div>
              <span>
                <i class="fas fa-check-circle checkmark"></i>
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
