import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-secondary mt-3 module-title"
          >
            <div className="d-flex justify-content-between align-items-center">
              <strong>
                <i class="fas fa-ellipsis-v me-2"></i>
                {module.name}
              </strong>
              <span>
                <i class="fas fa-check-circle checkmark"></i>
                <i class="fas fa-plus ms-2"></i>
                <i class="fas fa-ellipsis-v ms-2"></i>
              </span>
            </div>
            <p>{module.description}</p>
            {module.lessons && (
              <div className="list-group">
                {module.lessons.map((lesson, index) => (
                  <div key={index} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <strong>
                        <i class="fas fa-ellipsis-v me-2"></i>
                        {lesson.name}
                      </strong>
                      <span>
                        <i class="fas fa-check-circle checkmark"></i>
                        <i class="fas fa-ellipsis-v ms-2"></i>
                      </span>
                    </div>
                    <p>{lesson.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
export default ModuleList;
