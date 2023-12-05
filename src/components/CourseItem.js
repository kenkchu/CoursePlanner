import React from "react";

class CourseItem extends React.Component {

  render() {
    return <li key={this.props.course.id} className="course-item">
        <span>{this.props.course.title} - {this.props.course.desc} ({this.props.course.units} unit{this.props.course.units > 1? "s" : ""})</span>
        <button onClick={() => this.props.deleteCourseProps(this.props.course.id)}>DELETE</button>
      </li>
  }
}
export default CourseItem

