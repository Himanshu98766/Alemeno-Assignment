import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import courses from "../data/courses";

function CourseListing() {
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const filteredCourses = courses.filter((course) =>
  course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {filteredCourses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card">
              <Link to={`/courseDetail/${course.id}`}>
                <img src={course.thumbnail} className="card-img-top" alt={course.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.instructor}</p>
                <p className="card-text">{course.description}</p>
                <p className="card-text">Enrollment Status: {course.enrollmentStatus}</p>
                <p className="card-text">Duration: {course.duration}</p>
                <p className="card-text">Schedule: {course.schedule}</p>
                <p className="card-text">Location: {course.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseListing;
