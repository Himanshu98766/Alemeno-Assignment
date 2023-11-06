import React, { useState } from "react";
import EnrolledCourse from "./EnrolledCourse";
import enrolledCourse from "../data/EnrolledCourse";

function StudentDashboard() {
  const [courses, setCourses] = useState(enrolledCourse);

  const markCourseAsCompleted = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      <div className="row">
        {courses.map((course) => (
          <EnrolledCourse
            key={course.id}
            course={course}
            onMarkAsCompleted={markCourseAsCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
