import React from "react";
import CourseList from "./CourseList";
import Header from "./Header";
import SelectCourse from "./SelectCourse";
import { v4 as uuidv4 } from "uuid";
import courseData from '../cnit.json'

class CourseListContainer extends React.Component {

  state = {
    courses: [],
    addedCourses: []
  };

  addCourse = id => {
    this.setState({
      courses: this.state.courses.map(course => {
        if (course.id === id) {
          course.added = true;
          this.state.addedCourses.push(course);
        }
        return course;
      })
    });
  };

  deleteCourse = id => {
    this.setState({
      courses: this.state.courses.map(course => {
        if (course.id === id) {
          course.added = false;
        }
        return course;
      })
    });
    this.setState({
      addedCourses: [
        ...this.state.addedCourses.filter(course => {
          if (course.id != id)
            return course;
        })
      ]
    });
  };

  constructor(props) {
    super(props);

    for (const course  of courseData) {
      this.state.courses.push({
        id: uuidv4(),
        title: course.title,
        desc: course.desc,
        units: course.units,
        added: false
      });
    }

    const initialCourses = ["CNIT 103", "CNIT 131", "CNIT 106", "CNIT 120"];
    for (const initCourse of initialCourses) {
      var foundCourse = this.state.courses.find(course => course.title == initCourse);
      this.state.addedCourses.push(foundCourse);
      foundCourse.added = true;
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SelectCourse courses={this.state.courses} addCourseProps={this.addCourse} />
        <CourseList courses={this.state.addedCourses} deleteCourseProps={this.deleteCourse} />
      </div>
    )
  }
}
export default CourseListContainer

