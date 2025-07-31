import React, { Component } from "react";

const courseCatalog = [
  {
    department: "Computer Science",
    courses: [
      { code: "CS101", title: "Intro to Programming", credits: 3 },
      { code: "CS201", title: "Data Structures", credits: 4 },
    ],
    faculty: {
      chair: "Dr. Smith",
      office: "Room 101",
    },
  },
  {
    department: "Mathematics",
    courses: [
      { code: "MATH101", title: "Calculus I", credits: 4 },
      { code: "MATH201", title: "Linear Algebra", credits: 3 },
    ],
    faculty: {
      chair: "Dr. Allen",
      office: "Room 202",
    },
  },
];

export default class CourseImmutability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: courseCatalog,
    };
  }

  handleUpdates = () => {
    // Update 1: Change "Mathematics" department to "Applied Math"
    this.setState((prevState) => {
      return {
        ...prevState,
        courses: prevState.courses.map((item) => {
          return item.department === "Mathematics"
            ? { ...item, department: "Applied Math" }
            : item;
        }),
      };
    });

    // Update 2: Add a new course { code: "CS301", title: "Algorithms", credits: 4 } to "Computer Science"
    const newCourse = { code: "CS301", title: "Algorithms", credits: 4 };
    this.setState((prevState) => {
      return {
        ...prevState,
        courses: prevState.courses.map((item) => {
          return item.department === "Computer Science"
            ? {
                ...item,
                courses: [...item.courses, newCourse],
              }
            : item;
        }),
      };
    });

    // Update 3: Remove the "Linear Algebra" course from "Mathematics"
    this.setState((prevState) => {
      return {
        ...prevState,
        courses: prevState.courses.map((item) => {
          return {
            ...item,
            courses: item.courses.filter(
              (course) => course.title != "Linear Algebra"
            ),
          };
        }),
      };
    });

    // Update 4: Change "Dr. Smith"’s office to "Room 111"
    this.setState((prevState) => {
      return {
        ...prevState,
        courses: prevState.courses.map((item) => {
          return {
            ...item,
            faculty:
              item.faculty.chair === "Dr. Smith"
                ? { ...item.faculty, office: "Room 111" }
                : item.faculty,
          };
        }),
      };
    });
  };
  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Course Immutability</h1>
        <button onClick={this.handleUpdates}>Update courses</button>
      </div>
    );
  }
}
