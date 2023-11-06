import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetail() {
  const { id } = useParams();
  const courseId = Number(id);
  const course = courses.find((course) => course.id === courseId);

  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const toggleSyllabus = () => {
    setIsSyllabusOpen(!isSyllabusOpen);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>{course.name}</h1>
          <p>Instructor: {course.instructor}</p>
          <p>Description: {course.description}</p>
          <p>Enrollment Status: {course.enrollmentStatus}</p>
          <p>Duration: {course.duration}</p>
          <p>Schedule: {course.schedule}</p>
          <p>Location: {course.location}</p>
          <p>Pre-requisites: {course.prerequisites.join(', ')}</p>
          <div className="card">
            <div className="card-header" onClick={toggleSyllabus} style={{ cursor: "pointer" }}>
              Syllabus
            </div>
            <div className={`collapse ${isSyllabusOpen ? "show" : ""}`}>
              <ul className="list-group list-group-flush">
                {course.syllabus.map((item) => (
                  <li className="list-group-item" key={item.week}>
                    <strong>Week {item.week}:</strong> {item.topic}
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={course.thumbnail} alt={course.name} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
