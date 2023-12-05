import React, { Component } from "react";

class SelectCourse extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const selected = e.target[0].selectedOptions[0];
    if(selected !== undefined)
      this.props.addCourseProps(selected.value);
  };

  render() {
    const coursesToAdd = [
        ...this.props.courses.filter(course => {
            return !course.added;
        })
      ]
    return (
      <form className="f-container" onSubmit={this.handleSubmit}>
        <label htmlFor="courses" className="f-label">Select a Course:</label>
        <select id="courses" className="f-select">
          {coursesToAdd.map(course => (
            <option className="f-option" key={course.id} value={course.id}>{course.title} - {course.desc} ({course.units} unit{course.units > 1? "s" : ""})</option>
          ))}
        </select>
        <input className="f-submit" type="submit" value="ADD" />
      </form>
    )
  }
}
export default SelectCourse

