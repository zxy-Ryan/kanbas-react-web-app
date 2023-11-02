import { Link } from "react-router-dom";
import { React } from "react";
import EditForm from "./EditForm";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <EditForm
        course={course}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
      />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col">
            <div className="card h-100 course-card">
              <img src="/images/react.png" class="card-img-top" alt="..." />
              <div className="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="card-title text-danger"
                >
                  {course.name}
                </Link>
                <p class="card-text">2023 Fall, Section 3</p>
                <div className="d-flex justify-content-front">
                  <button
                    className="btn btn-warning me-1"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger me-1"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
