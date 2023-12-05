import React from "react";
import CourseItem from "./CourseItem"

class CourseList extends React.Component {
  render() {
    var totalCourses = this.props.courses.length;
    var totalUnits = this.props.courses.map(course => course.units).reduce((sum, val) => {return sum + val}, 0);
    return (
      <div id="course_list">
        <p id="summary">Number of Courses Added: {totalCourses}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Number of Units: {totalUnits}</p>
        {this.props.courses.map(course => (
          <CourseItem key={course.id} course={course} deleteCourseProps={this.props.deleteCourseProps} />
        ))}
      </div>
    )
  }
}
export default CourseList

