import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-secondary me-1">
          <i class="fas fa-upload"></i> Import
        </button>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle me-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-download"></i> Export
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
        <button type="button" class="btn btn-secondary me-1">
          <i class="fas fa-cog"></i>
        </button>
      </div>
      <div class="p-3 mb-3">
        <div class="row mb-3">
          <div class="col-md-6">
            <label
              for="student-names"
              style={{fontWeight: "bold"}}
            >
              Student Name
            </label>
            <input
              type="text"
              id="student-names"
              class="form-control"
              placeholder="Search Students"
            ></input>
          </div>
          <div class="col-md-6">
            <label
              for="assignment-names"
              style={{fontWeight: "bold"}}
            >
              Assignment Names
            </label>
            <input
              type="text"
              id="assignment-names"
              class="form-control"
              placeholder="Search Assignments"
            ></input>
          </div>
        </div>
        <button type="button" class="btn btn-secondary">
          <i class="fas fa-filter"></i> Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
