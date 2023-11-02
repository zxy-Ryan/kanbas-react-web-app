import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
  resetAssignmentState,
} from "./assignmentsReducer";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const handleSave = () => {
    if (assignmentId === "newassignment") {
      dispatch(addAssignment({ ...assignment, course: courseId }));
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } else {
      dispatch(updateAssignment(assignment));
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }
  };
  const handleCancel = () => {
    dispatch(resetAssignmentState());
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
      <label for="assignment-name">Assignment Name</label>
      <input
        value={assignment.title}
        id="assignment-name"
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <label for="assignment-desc">Description</label>
      <textarea
        value={assignment.description}
        id="assignment-desc"
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
      />
      <label for="assignment-points">Points</label>
      <input value={assignment.points} id="assignment-points" className="form-control mb-2" />

      <label for="assign" className="form-label">
        Assign
      </label>
      <div className="form-control" id="assign">
        <div className="mb-3">
          <label for="due" className="form-label">
            Due
          </label>
          <input
            type="date"
            className="form-control"
            id="due"
            name="due"
            value={assignment.dueDate}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, dueDate: e.target.value })
              )
            }
          />
        </div>
        <div className="row">
          <div className="col">
            <label for="availableFrom" className="form-label">
              Available from
            </label>
            <input
              type="date"
              className="form-control"
              id="availableFrom"
              name="availableFrom"
              value={assignment.availableFromDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableFromDate: e.target.value,
                  })
                )
              }
            />
          </div>
          <div className="col">
            <label for="until" className="form-label">
              Until
            </label>
            <input
              type="date"
              className="form-control"
              id="until"
              name="until"
              value={assignment.availableUntilDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableUntilDate: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
      <button onClick={handleCancel} className="btn btn-secondary me-1">
          Cancel
        </button>
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
