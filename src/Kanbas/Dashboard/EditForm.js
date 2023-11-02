function EditForm({ course, setCourse, addNewCourse, updateCourse }) {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div>
          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-front">
          <button
            className="btn btn-success me-1"
            onClick={() => addNewCourse(course)}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-primary me-1"
            onClick={() => updateCourse(course)}
          >
            {" "}
            Update{" "}
          </button>
        </div>
      </li>

      {/* {courses.map((course) => (
        <li key={course.id} className="list-group-item">
          <button
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
          >
            Edit
          </button>

          <button
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>

          {course.name}
        </li>
      ))} */}
    </ul>
  );
}
export default EditForm;
