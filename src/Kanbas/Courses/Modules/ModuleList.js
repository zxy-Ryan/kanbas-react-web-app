import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      <li className="list-group-item">
        <input
          value={module.name}
          className="form-control mb-2"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          className="form-control mb-2"
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <div className="d-flex justify-content-front">
          <button
            className="btn btn-success me-1"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-primary me-1"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
      </li>

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
                <button className="btn btn-warning" onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button
                  className="btn btn-danger ms-2"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <i className="fas fa-check-circle checkmark ms-2"></i>
                <i className="fas fa-plus ms-2"></i>
                <i className="fas fa-ellipsis-v ms-2"></i>
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
