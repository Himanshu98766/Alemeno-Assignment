import React from "react";

function EnrolledCourse({ course, onMarkAsCompleted }) {
  const progressBarWidth = course.completed ? "100%" : "0%";

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={course.thumbnail} className="card-img-top" alt={course.name} />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">Instructor: {course.instructor}</p>
          <p className="card-text">Due Date: {course.dueDate}</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: progressBarWidth }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progressBarWidth}
            </div>
          </div>
          {course.completed ? (
            <p className="card-text">Completed</p>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => onMarkAsCompleted(course.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourse;
