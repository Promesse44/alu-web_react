import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList() {
  return (
    <div className="CourseList">
      <table>
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="Available courses"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
