import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div class="d-flex justify-content-end align-items-center">
        <i class="fas fa-check-circle checkmark"></i>
        <span style={{ color: "green" }}>Published</span>
        <button type="button" class="btn btn-secondary ms-3">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>

      <hr />
      <p>Assignment Name</p>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary me-1"
        >
          Cancel
        </Link>
        {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
        <button onClick={handleSave} className="btn btn-danger me-1">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
